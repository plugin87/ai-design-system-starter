'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function CarouselPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
          <p className="text-muted-foreground mt-2">
            A carousel with motion and swipe built using Embla Carousel. Supports horizontal and vertical orientations.
          </p>
        </div>

        {/* Basic Carousel */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Carousel</CardTitle>
            <CardDescription>
              A simple horizontal carousel with numbered slides and navigation arrows.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center px-12">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Items Per View */}
        <Card>
          <CardHeader>
            <CardTitle>Multiple Items Per View</CardTitle>
            <CardDescription>
              Show multiple slides at once using basis utility classes on CarouselItem.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center px-12">
              <Carousel className="w-full max-w-sm">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Carousel className="w-full max-w-sm">
  <CarouselContent className="-ml-1">
    {Array.from({ length: 8 }).map((_, index) => (
      <CarouselItem key={index} className="pl-1 basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Half-Width Items */}
        <Card>
          <CardHeader>
            <CardTitle>Half-Width Items</CardTitle>
            <CardDescription>
              Two slides visible at a time using basis-1/2 on each item.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center px-12">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Carousel className="w-full max-w-md">
  <CarouselContent>
    {Array.from({ length: 6 }).map((_, index) => (
      <CarouselItem key={index} className="basis-1/2">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-3xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Vertical Orientation */}
        <Card>
          <CardHeader>
            <CardTitle>Vertical Orientation</CardTitle>
            <CardDescription>
              A vertically scrolling carousel using the orientation prop.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center py-12">
              <Carousel
                orientation="vertical"
                className="w-full max-w-xs"
                opts={{ align: 'start' }}
              >
                <CarouselContent className="-mt-1 h-[200px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 basis-1/2">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Implementation:</p>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                <code>{`<Carousel
  orientation="vertical"
  className="w-full max-w-xs"
  opts={{ align: 'start' }}
>
  <CarouselContent className="-mt-1 h-[200px]">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="pt-1 basis-1/2">
        <div className="p-1">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <span className="text-3xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
