import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Image src="logo.svg" alt="Edgy.digital Logo" width={170} height={37} />
    </div>
  )
}
