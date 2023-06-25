import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio'

export const Banner = () => (
  <div className="relative h-60 w-[1200px] overflow-hidden rounded-t-lg">
    <RadixAspectRatio.Root ratio={16 / 9}>
      <img
        className="h-full w-full object-cover"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge_IzWEe76w3IDScN7THpQeibD5tTXyTqg7HcvjSj2YF_86WYvTtge6Hfy3yPb0-q-6vf_LBpw99-1FDfPV-1LegCrHgnmLEp6Yuhli1eyw2202OjCITzKrAEbsQWBKm_SagRmwYq0iRIKwgPR43oM-emWlNYzAPy6X8FF1VCbeB6fSr1E7e0_0yea/w1200-h630-p-k-no-nu/Free%20FIre%20Gaming%20Channel%20Best%20Channel%20Art%20Images.webp"
        alt="Landscape photograph by Tobias Tullius"
      />
    </RadixAspectRatio.Root>
  </div>
)
