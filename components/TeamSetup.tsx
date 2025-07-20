// TeamSetup.tsx
import React, { useState } from 'react';

interface Player {
  number: number;
  name: string;
}

interface Staff {
  role: string;
  name: string;
}

interface TeamSetupProps {
  onSave: (teamData: any) => void;
  teamLabel: 'local' | 'visitante';
}

const TeamSetup: React.FC<TeamSetupProps> = ({ onSave, teamLabel }) => {
  const [teamName, setTeamName] = useState('');
  const [teamType, setTeamType] = useState<'club' | 'seleccion'>('club');
  const [category, setCategory] = useState('');
  const [shirtColor, setShirtColor] = useState('#ffffff');
  const [shortsColor, setShortsColor] = useState('#000000');
  const [players, setPlayers] = useState<Player[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);

  const categoryOptions = [
    'Alevín Masculino', 'Alevín Femenino',
    'Infantil Masculino', 'Infantil Femenino',
    'Cadete Masculino', 'Cadete Femenino',
    'Juvenil Masculino', 'Juvenil Femenino',
    'Senior Femenino', '2ª Nacional Masculina',
    'División de Honor Plata Femenina',
    'División de Honor Plata Masculina',
    'División de Honor Oro Femenina',
    'División de Honor Femenina',
    '1ª Nacional Masculina', 'ASOBAL'
  ];

  const addPlayer = () => {
    if (players.length < 16) {
      setPlayers([...players, { number: 0, name: '' }]);
    }
  };

  const addStaff = () => {
    if (staff.length < 5) {
      setStaff([...staff, { role: '', name: '' }]);
    }
  };

  const handleSave = () => {
    onSave({
      teamLabel,
      teamName,
      teamType,
      category,
      shirtColor,
      shortsColor,
      players,
      staff,
    });
  };

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Configuración equipo {teamLabel}</h2>

      <input
        type="text"
        placeholder="Nombre del equipo"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        className="mb-2 p-2 w-full border rounded"
      />

      <div className="flex mb-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="club"
            checked={teamType === 'club'}
            onChange={() => setTeamType('club')}
          />
          Club
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="seleccion"
            checked={teamType === 'seleccion'}
            onChange={() => setTeamType('seleccion')}
          />
          Selección
        </label>
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-2 p-2 w-full border rounded"
      >
        <option value="">Seleccione categoría</option>
        {categoryOptions.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="mb-2 flex items-center gap-2">
        <label>Camiseta:</label>
        <input type="color" value={shirtColor} onChange={(e) => setShirtColor(e.target.value)} />
        <label>Pantalón:</label>
        <input type="color" value={shortsColor} onChange={(e) => setShortsColor(e.target.value)} />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Jugadores ({players.length}/16)</h3>
        {players.map((player, idx) => (
          <div key={idx} className="flex gap-2 mb-1">
            <input
              type="number"
              placeholder="Nº"
              value={player.number}
              onChange={(e) => {
                const updated = [...players];
                updated[idx].number = parseInt(e.target.value);
                setPlayers(updated);
              }}
              className="w-16 p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Nombre"
              value={player.name}
              onChange={(e) => {
                const updated = [...players];
                updated[idx].name = e.target.value;
                setPlayers(updated);
              }}
              className="flex-1 p-1 border rounded"
            />
          </div>
        ))}
        <button onClick={addPlayer} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Añadir jugador</button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Responsables ({staff.length}/5)</h3>
        {staff.map((res, idx) => (
          <div key={idx} className="flex gap-2 mb-1">
            <input
              type="text"
              placeholder="Rol (entrenador, médico...)"
              value={res.role}
              onChange={(e) => {
                const updated = [...staff];
                updated[idx].role = e.target.value;
                setStaff(updated);
              }}
              className="w-48 p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Nombre"
              value={res.name}
              onChange={(e) => {
                const updated = [...staff];
                updated[idx].name = e.target.value;
                setStaff(updated);
              }}
              className="flex-1 p-1 border rounded"
            />
          </div>
        ))}
        <button onClick={addStaff} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Añadir responsable</button>
      </div>

      <button onClick={handleSave} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Guardar equipo
      </button>
    </div>
  );
};

export default TeamSetup;
