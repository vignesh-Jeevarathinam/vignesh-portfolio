import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

      <Image
        src="/images/profile.jpeg"
        alt="Vignesh J"
        width={400}
        height={400}
        priority
        className="
          relative
          w-[320px]
          h-[320px]
          md:w-[420px]
          md:h-[420px]
          object-cover
          rounded-3xl
          border
          shadow-2xl
        "
      />
    </div>
  );
}