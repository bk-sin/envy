"use client";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTranslations } from 'next-intl';

const tZod = typeof window !== 'undefined' ? undefined : () => '';
const t = typeof window !== 'undefined' ? undefined : () => '';
const emailFormT = typeof window !== 'undefined' ? undefined : () => '';
const emailSchema = z.object({
  email: z.string().email(),
});

type EmailFormData = z.infer<typeof emailSchema>;

export function EmailForm() {
  const t = useTranslations('emailForm');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(z.object({
      email: z.string().email(t('invalidEmail')),
    })),
  });

  const onSubmit = async (data: EmailFormData) => {
    try {
      const response = await fetch("/api/beta/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        toast.success(t('success'), {
          duration: 5000,
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || t('error'));
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error(t('connectionError'));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-4"
    >
      <div className="flex-1">
        <Input
          {...register("email")}
          type="email"
          placeholder={t('placeholder')}
          className="w-full h-14 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="px-8 h-14 py-4 text-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="inline-block mr-2 w-4 h-4 animate-spin" />
            {t('sending')}
          </>
        ) : (
          t('cta')
        )}
      </Button>
    </form>
  );
}
