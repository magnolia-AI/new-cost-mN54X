'use client'

import { Navigation } from '@/components/navigation'
import { TypingEffect } from '@/components/typing-effect'
import { ProjectCard } from '@/components/project-card'
import { Skills } from '@/components/skills'
import { Timeline } from '@/components/timeline'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping experience with cart functionality and payment processing.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=400&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Productivity application for teams to manage projects and collaborate in real-time.",
      technologies: ["Next.js", "TypeScript", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with interactive maps and alerts.",
      technologies: ["React", "D3.js", "OpenWeather API"],
      imageUrl: "https://images.unsplash.com/photo-1561484930-994b8cb85a65?q=80&w=400&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Alex</span>
          </h1>
          <div className="mt-6 text-2xl md:text-4xl text-muted-foreground">
            <TypingEffect 
              texts={[
                "Frontend Developer",
                "UI/UX Enthusiast", 
                "React Specialist"
              ]} 
            />
          </div>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <Button variant="ghost" size="icon">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <Timeline />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

