import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { frFR } from "@clerk/localizations";
import { ThemeProvider } from '@/components/providers/theme-provider';


const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invoice generate',
  description: 'Application gestion de facture client',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="en">
        <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider 
            attribute="class"  
            defaultTheme="dark"
            storageKey='discord-theme'
            enableSystem={false}>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>

  )
}
