export default function Footer() {
  return (
    <footer className="bg-fuchsia-100 mt-8 py-4">
      <p className="container mx-auto flex justify-center text-sm text-gray-500">
        Copyright &copy; Ken Mwangi, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
