import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Sobre() {
  return (
    <main>
      <section>
        <h1>Sobre</h1>
        <Image src="/sobre.jpg" alt="Sobre" width={200} height={200} />
      </section>
    </main>
  );
}
