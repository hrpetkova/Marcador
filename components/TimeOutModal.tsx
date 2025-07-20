import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HandballTimerApp = () => {
  const [teamAName, setTeamAName] = useState("");
  const [teamBName, setTeamBName] = useState("");
  const [teamAColor, setTeamAColor] = useState({ shirt: "#0000FF", shorts: "#FFFFFF" });
  const [teamBColor, setTeamBColor] = useState({ shirt: "#FF0000", shorts: "#000000" });

  const [teamAPlayers, setTeamAPlayers] = useState(Array(16).fill(""));
  const [teamBPlayers, setTeamBPlayers] = useState(Array(16).fill(""));
  const [teamAStaff, setTeamAStaff] = useState(Array(5).fill(""));
  const [teamBStaff, setTeamBStaff] = useState(Array(5).fill(""));

  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [selectedScorerA, setSelectedScorerA] = useState(null);
  const [selectedScorerB, setSelectedScorerB] = useState(null);

  const handleScore = (team) => {
    if (team === "A") {
      if (selectedScorerA !== null) {
        setScoreA(scoreA + 1);
      }
    } else {
      if (selectedScorerB !== null) {
        setScoreB(scoreB + 1);
      }
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold">Equipo A</h2>
          <Input placeholder="Nombre del equipo A" value={teamAName} onChange={(e) => setTeamAName(e.target.value)} />
          <div className="flex items-center gap-2">
            <label>Camiseta</label>
            <input type="color" value={teamAColor.shirt} onChange={(e) => setTeamAColor({ ...teamAColor, shirt: e.target.value })} />
            <label>Pantalón</label>
            <input type="color" value={teamAColor.shorts} onChange={(e) => setTeamAColor({ ...teamAColor, shorts: e.target.value })} />
          </div>
          <h3 className="font-semibold mt-2">Jugadores</h3>
          {teamAPlayers.map((p, idx) => (
            <Input key={idx} placeholder={`Jugador ${idx + 1}`} value={p} onChange={(e) => {
              const updated = [...teamAPlayers];
              updated[idx] = e.target.value;
              setTeamAPlayers(updated);
            }} />
          ))}
          <h3 className="font-semibold mt-2">Responsables</h3>
          {teamAStaff.map((s, idx) => (
            <Input key={idx} placeholder={`Responsable ${idx + 1}`} value={s} onChange={(e) => {
              const updated = [...teamAStaff];
              updated[idx] = e.target.value;
              setTeamAStaff(updated);
            }} />
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold">Equipo B</h2>
          <Input placeholder="Nombre del equipo B" value={teamBName} onChange={(e) => setTeamBName(e.target.value)} />
          <div className="flex items-center gap-2">
            <label>Camiseta</label>
            <input type="color" value={teamBColor.shirt} onChange={(e) => setTeamBColor({ ...teamBColor, shirt: e.target.value })} />
            <label>Pantalón</label>
            <input type="color" value={teamBColor.shorts} onChange={(e) => setTeamBColor({ ...teamBColor, shorts: e.target.value })} />
          </div>
          <h3 className="font-semibold mt-2">Jugadores</h3>
          {teamBPlayers.map((p, idx) => (
            <Input key={idx} placeholder={`Jugador ${idx + 1}`} value={p} onChange={(e) => {
              const updated = [...teamBPlayers];
              updated[idx] = e.target.value;
              setTeamBPlayers(updated);
            }} />
          ))}
          <h3 className="font-semibold mt-2">Responsables</h3>
          {teamBStaff.map((s, idx) => (
            <Input key={idx} placeholder={`Responsable ${idx + 1}`} value={s} onChange={(e) => {
              const updated = [...teamBStaff];
              updated[idx] = e.target.value;
              setTeamBStaff(updated);
            }} />
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <h2 className="text-2xl font-bold text-center mb-4">Marcador</h2>
        <div className="flex justify-around items-center text-6xl font-bold">
          <div>
            <div style={{ backgroundColor: teamAColor.shirt }} className="w-8 h-4 mx-auto" />
            <div style={{ backgroundColor: teamAColor.shorts }} className="w-8 h-4 mx-auto" />
            <div className="text-center">{teamAName || "Equipo A"}</div>
            <div>{scoreA}</div>
            <select onChange={(e) => setSelectedScorerA(e.target.value)}>
              <option value="">--Jugador--</option>
              {teamAPlayers.map((p, i) => (
                <option key={i} value={i}>{p || `Jugador ${i + 1}`}</option>
              ))}
            </select>
            <Button onClick={() => handleScore("A")}>+1 Gol</Button>
          </div>

          <div>VS</div>

          <div>
            <div style={{ backgroundColor: teamBColor.shirt }} className="w-8 h-4 mx-auto" />
            <div style={{ backgroundColor: teamBColor.shorts }} className="w-8 h-4 mx-auto" />
            <div className="text-center">{teamBName || "Equipo B"}</div>
            <div>{scoreB}</div>
            <select onChange={(e) => setSelectedScorerB(e.target.value)}>
              <option value="">--Jugador--</option>
              {teamBPlayers.map((p, i) => (
                <option key={i} value={i}>{p || `Jugador ${i + 1}`}</option>
              ))}
            </select>
            <Button onClick={() => handleScore("B")}>+1 Gol</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandballTimerApp;
