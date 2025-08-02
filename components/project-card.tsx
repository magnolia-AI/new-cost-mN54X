'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  longDescription: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-muted-foreground line-clamp-2">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary">+{project.technologies.length - 3} more</Badge>
              )}
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">{project.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 pt-4">
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}



