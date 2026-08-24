type DoodleProps = {
  className?: string;
};

/**
 * Rabisco amarelo desenhado à mão, no estilo dos contornos que a marca usa
 * sobre fotografias no PDF de identidade (ex.: contorno ao redor da criança
 * na foto "Aqui o cuidado tem + brincadeira"). Puramente decorativo.
 */
export function Doodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 92C8 65 24 34 54 20C84 6 124 8 150 26C176 44 186 78 172 106C158 134 122 150 90 148C58 146 20 119 14 92Z"
        stroke="#F5B70F"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="1 14"
      />
    </svg>
  );
}
