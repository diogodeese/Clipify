import { NavigationBar } from '@components/Navbar/navigationBar'
import { Post } from '@components/post'

export const Landing = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex w-screen justify-center py-8">
        <div className="flex w-[800px] flex-col items-center justify-center gap-6 ">
          <Post />
        </div>
        <div className="w-[400px]">
          <div className="h-20 w-full rounded-lg border border-neutral-700">
            <h4>Games</h4>
          </div>
        </div>
      </div>
    </>
  )
}
