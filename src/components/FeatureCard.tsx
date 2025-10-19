import { Card } from "./ui/card";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-[#1a1a2e] border-purple-600/30 p-6 hover:bg-[#252540] transition-all hover:scale-105">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-32 h-32 rounded-2xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-white">{title}</h3>
        <p className="text-purple-200">{description}</p>
      </div>
    </Card>
  );
}
