export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-1 bg-red-100 border-l border-r border-b border-gray-300">
      {children}
    </main>
  )
}
