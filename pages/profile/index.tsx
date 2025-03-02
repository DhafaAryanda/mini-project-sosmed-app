import { ProfileCard } from '@/components/Profile/ProfileCard'
import { getProfile } from '@/services/PostService'
import { useEffect, useState } from 'react'

type ProfileCardProps = {
  id: number
  name: string
  email: string
  dob?: string
  phone?: string
  hobby?: string
  deleted_at?: string
  created_at: string
  updated_at: string
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileCardProps>()
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
