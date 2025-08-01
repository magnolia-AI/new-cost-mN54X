'use client'

import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

interface Skill {
  name: string
  level: number
  icon?: string
}

interface SkillsProps {
  skills: Skill[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium flex items-center">
                {skill.icon && <span className="mr-2">{skill.icon}</span>}
                {skill.name}
              </span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 pt-4">
        {skills.flatMap(skill => skill.name.split(',')).map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech.trim()}
          </Badge>
        ))}
      </div>
    </div>
  )
}
