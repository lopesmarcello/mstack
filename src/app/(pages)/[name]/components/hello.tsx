"use client";

interface Hello {
  name: string;
}

export function Hello({ name }: Hello) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <p className="text-4xl font-bold text-white/90">Hello, {name}!</p>
    </div>
  );
}
