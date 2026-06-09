export default function Footer() {
  return (
    <footer className="border-t py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h3 className="font-bold text-xl">
              Vignesh J
            </h3>

            <p className="text-gray-500">
              Senior Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6">

            <a
              href="https://github.com/vignesh-Jeevarathinam"
              target="_blank"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vignesh-jeevarathinam-aa9892187/"
              target="_blank"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <p className="text-center mt-8 text-gray-500">
          © 2026 Vignesh J. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}