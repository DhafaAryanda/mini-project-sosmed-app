import { ProfileCard } from '@/components/Profile/ProfileCard'
import { getProfile } from '@/lib/api/profile'
import useSWR from 'swr'

export default function ProfilePage() {
  const { data: profile, error, isLoading } = useSWR('/user/me', getProfile)

  if (isLoading)
    return (
      <p className="text-center text-sm md:text-base text-gray-500">
        Loading profile...
      </p>
    )
  if (error)
    return (
      <p className="text-center text-sm md:text-base text-red-500">
        Failed to load profile
      </p>
    )

  return (
    <div className="w-full h-full flex justify-center ">
      {profile && <ProfileCard profile={profile} />}
    </div>
  )
}
