"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [attempted, setAttempted] = useState(false);

  return (
    <form
      className="mt-8"
      onSubmit={(event) => {
        event.preventDefault();
        setAttempted(true);
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setAttempted(false);
          }}
          placeholder="your@email.com"
          className="h-12 flex-1 rounded-full border border-forest/15 bg-paper px-5 text-sm text-forest outline-none placeholder:text-forest/40 focus:border-sage"
        />
        <Button type="submit" variant="primary" className="sm:w-40">
          Subscribe
        </Button>
      </div>
      <p
        className="mt-4 text-sm leading-6 text-forest/65"
        role={attempted ? "status" : undefined}
      >
        {attempted
          ? "電子報尚在準備，目前尚未啟用訂閱。我們沒有儲存你的電子郵件。"
          : "目前為靜態展示，電子報服務尚未啟用。送出後不會真正完成訂閱。"}
      </p>
    </form>
  );
}
