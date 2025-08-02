'use client'

import { Badge } from '@/components/ui/badge'

interface TimelineItem {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-12">
      {items.map((item, index) => (
        <div key={item.id} className="relative pl-8 border-l-2 border-primary/20 group">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
          <div className="mb-1">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-primary font-medium">{item.company}</p>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
          <p className="text-muted-foreground">{item.description}</p>
          {item.technologies && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
