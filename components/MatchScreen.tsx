import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TeamSetup({ onNext }) {
  const [teamAName, setTeamAName] = useState("");
  const [teamBName, setTeamBName] = useState("");
  const [teamAColors, setTeamAColors] = useState({ shirt: "", shorts: "" });
  const [teamBColors, setTeamBColors] = useState({ shirt: "", shorts: "" });

  const handleSubmit = () => {
    if (teamAName && teamBName) {
      onNext({
        teamA: { name: teamAName, colors: teamAColors },
        teamB: { name: teamBName, colors: teamBColors },
      });
    } else {
      alert("Introduce el nombre de ambos equipos");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Configuración de Equipos</h1>

      <div>
        <h2 className="font-semibold">Equipo A</h2>
        <input
          className="w-full p-2 border rounded"
          placeholder="Nombre del equipo A"
          value={teamAName}
          onChange={(e) => setTeamAName(e.target.value)}
        />
        <div className="flex gap-2 mt-2">
          <input
            className="p-2 border rounded"
            placeholder="Color camiseta"
            value={teamAColors.shirt}
            onChange={(e) =>
              setTeamAColors({ ...teamAColors, shirt: e.target.value })
            }
          />
          <input
            className="p-2 border rounded"
            placeholder="Color pantalón"
            value={teamAColors.shorts}
            onChange={(e) =>
              setTeamAColors({ ...teamAColors, shorts: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <h2 className="font-semibold">Equipo B</h2>
        <input
          className="w-full p-2 border rounded"
          placeholder="Nombre del equipo B"
          value={teamBName}
          onChange={(e) => setTeamBName(e.target.value)}
        />
        <div className="flex gap-2 mt-2">
          <input
            className="p-2 border rounded"
            placeholder="Color camiseta"
            value={teamBColors.shirt}
            onChange={(e) =>
              setTeamBColors({ ...teamBColors, shirt: e.target.value })
            }
          />
          <input
            className="p-2 border rounded"
            placeholder="Color pantalón"
            value={teamBColors.shorts}
            onChange={(e) =>
              setTeamBColors({ ...teamBColors, shorts: e.target.value })
            }
          />
        </div>
      </div>

      <Button onClick={handleSubmit}>Siguiente</Button>
    </div>
  );
}
