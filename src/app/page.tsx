'use client'
import { useRef } from 'react'
import HeroSection from '@/components/HeroSection'
import ScrollCursor from '@/components/ScrollCursor'
import TechStack from '@/components/TechStacks'

export default function page() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
        <HeroSection />
      </div>
  )
}