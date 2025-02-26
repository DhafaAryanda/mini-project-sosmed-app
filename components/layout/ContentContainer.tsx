import { useRouter } from 'next/router'

export const ContentContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { pathname } = useRouter()

  return (
    <div className="w-3/4  flex-1 items-start justify-center">
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-14 py-4 px-6  font-bold capitalize text-xl items-center flex border-b border-border">
          {pathname === '/' ? 'Home' : pathname.replace('/', '')}
        </div>
        <div className="w-full h-11/12 p-6 justify-center flex">{children}</div>
      </div>
    </div>
  )
}
