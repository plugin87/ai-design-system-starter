'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

export default function AspectRatioPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Aspect Ratio</h1>
          <p className="text-muted-foreground mt-2">
            Displays content within a desired ratio.
          </p>
        </div>

        {/* 16:9 Aspect Ratio */}
        <Card>
          <CardHeader>
            <CardTitle>16:9 Ratio</CardTitle>
            <CardDescription>
              Standard widescreen ratio commonly used for videos and hero images
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full max-w-xl">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<AspectRatio ratio={16 / 9} className="bg-muted">
  <Image
    src="https://images.unsplash.com/photo-..."
    alt="Photo"
    fill
    className="object-cover"
  />
</AspectRatio>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* 1:1 Aspect Ratio */}
        <Card>
          <CardHeader>
            <CardTitle>1:1 Ratio (Square)</CardTitle>
            <CardDescription>
              Perfect square ratio used for profile pictures and thumbnails
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full max-w-xs">
              <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=600&dpr=2&q=80"
                  alt="Photo by Jared Rice"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* 4:3 Aspect Ratio */}
        <Card>
          <CardHeader>
            <CardTitle>4:3 Ratio</CardTitle>
            <CardDescription>
              Classic display ratio used for photos and embedded content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full max-w-md">
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&dpr=2&q=80"
                  alt="Photo by David Marcu"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* 21:9 Aspect Ratio */}
        <Card>
          <CardHeader>
            <CardTitle>21:9 Ratio (Ultra-wide)</CardTitle>
            <CardDescription>
              Cinematic ultra-wide ratio for banners and panoramic content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full max-w-2xl">
              <AspectRatio ratio={21 / 9} className="bg-muted rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&dpr=2&q=80"
                  alt="Photo by Thomas Lefebvre"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* With Custom Content */}
        <Card>
          <CardHeader>
            <CardTitle>With Custom Content</CardTitle>
            <CardDescription>
              AspectRatio can wrap any content, not just images
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Map placeholder */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Map embed (16:9)</p>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden border">
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      Map Embed
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* Video placeholder */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Video embed (16:9)</p>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden border">
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      Video Player
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* Chart placeholder */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Chart (1:1)</p>
                <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden border">
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                      </svg>
                      Chart Area
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ratio Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Ratio Comparison</CardTitle>
            <CardDescription>
              Visual comparison of common aspect ratios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { ratio: 1, label: '1:1' },
                { ratio: 4 / 3, label: '4:3' },
                { ratio: 16 / 9, label: '16:9' },
                { ratio: 21 / 9, label: '21:9' },
              ].map(({ ratio, label }) => (
                <div key={label}>
                  <AspectRatio ratio={ratio} className="bg-primary/10 rounded-md border-2 border-dashed border-primary/30">
                    <div className="flex items-center justify-center h-full">
                      <span className="text-sm font-semibold text-primary">{label}</span>
                    </div>
                  </AspectRatio>
                  <p className="text-xs text-muted-foreground mt-1 text-center">{label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
