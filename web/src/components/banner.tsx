import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio'

interface BannerProps {
  bannerUrl: string
}

export const Banner = (props: BannerProps) => (
  <div className="relative h-60 w-[1200px] overflow-hidden rounded-t-lg">
    <RadixAspectRatio.Root ratio={16 / 9}>
      <img
        className="h-full w-full object-cover"
        src={props.bannerUrl}
        alt="Landscape photograph by Tobias Tullius"
      />
    </RadixAspectRatio.Root>
  </div>
)
