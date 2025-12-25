import { redirect } from "next/navigation"
import { defaultLanguage } from "@/lib/i18n/utils"

export default function RootPage() {
  redirect(`/${defaultLanguage}`)
}
