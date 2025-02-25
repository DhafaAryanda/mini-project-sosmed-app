export const ContentContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-3/4 p-4 flex items-center justify-center">
      <div className="text-xl">3/4</div>
      {children}
    </div>
  )
}
