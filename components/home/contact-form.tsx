'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { sendEmail } from './_ops/_actions'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data)
      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    }
  }

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Your Name"
                {...register('name')}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Your Email"
                {...register('email')}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <Input
              placeholder="Subject"
              {...register('subject')}
              className={errors.subject ? 'border-destructive' : ''}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              rows={5}
              {...register('message')}
              className={errors.message ? 'border-destructive' : ''}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}