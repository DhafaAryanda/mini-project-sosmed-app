import { ProfileCard } from '@/components/Profile/ProfileCard'
import { getProfile } from '@/lib/api/profile'
import { Profile } from '@/schemas/profile/profileSchema'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>()
  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile()
      setProfile(data)
    }

    fetchProfile()
  }, [])
  return (
    <div className="w-full h-full flex justify-center ">
      {profile && <ProfileCard profile={profile} />}
    </div>
  )
}
