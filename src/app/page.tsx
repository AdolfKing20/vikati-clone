import Image from "next/image";
import Link from "next/link";
import banner from "@/images/mobile-inicio-1-2.webp"

export default function Home() {
  return (
    <main>
      <section>
        <Link href={""}>
        <Image src={banner} alt="" />
        </Link>
      </section>
    </main>
  );
}
