"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { demoCalendarPosts } from "@/lib/demo-data";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const statusColors = {
  Scheduled: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Draft: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  Published: "bg-green-500/10 text-green-400 border-green-500/20",
  "Needs approval": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function CalendarGrid({ className }: { className?: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedPost = demoCalendarPosts.find((p) => p.id === selected);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid grid-cols-5 gap-2">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const posts = demoCalendarPosts.filter((p) => p.day === day);
          return (
            <div
              key={`col-${day}`}
              className="min-h-[120px] space-y-2 rounded-lg border border-border bg-muted/20 p-2"
            >
              {posts.map((post) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setSelected(post.id)}
                  className={cn(
                    "w-full rounded-md border p-2 text-left transition-all hover:-translate-y-0.5",
                    selected === post.id ? "border-accent bg-accent/5" : "border-border bg-card"
                  )}
                >
                  <p className="truncate text-[10px] font-medium">{post.title}</p>
                  <p className="text-[9px] text-muted-foreground">{post.platform}</p>
                  <span
                    className={cn(
                      "mt-1 inline-block rounded border px-1 py-0.5 text-[8px]",
                      statusColors[post.status]
                    )}
                  >
                    {post.status}
                  </span>
                </button>
              ))}
            </div>
          );
        })}
      </div>

      {selectedPost && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-border bg-card p-4"
        >
          <p className="text-sm font-medium">{selectedPost.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {selectedPost.day} at {selectedPost.time} · {selectedPost.platform}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Status: {selectedPost.status}
          </p>
        </motion.div>
      )}
    </div>
  );
}
