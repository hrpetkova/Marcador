import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SetupTeams = () => {
  const [teams, setTeams] = useState([
    { name: '', jerseyColor: '', shortsColor: '', players: Array(16).fill(''), staff: Array(5).fill('') },
    { name: '', jerseyColor: '', shortsColor: '', players: Array(16).fill(''), staff: Array(5).fill('') },
  ]);

  const handleTeamChange = (index, field, value) => {
    const updatedTeams = [...teams];
    updatedTeams[index][field] = value;
    setTeams(updatedTeams);
  };

  const handlePlayerChange = (teamIndex, playerIndex, value) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].players[playerIndex] = value;
    setTeams(updatedTeams);
  };

  const handleStaffChange = (teamIndex, staffIndex, value) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].staff[staffIndex] = value;
    setTeams(updatedTeams);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {teams.map((team, teamIndex) => (
        <Card key={teamIndex} className="p-4">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">Equipo {teamIndex + 1}</h2>
            <Input
              placeholder="Nombre del equipo"
              value={team.name}
              onChange={(e) => handleTeamChange(teamIndex, 'name', e.target.value)}
              className="mb-2"
            />
            <div className="flex gap-2 mb-4">
              <Input
                type="color"
                value={team.jerseyColor}
                onChange={(e) => handleTeamChange(teamIndex, 'jerseyColor', e.target.value)}
                title="Color camiseta"
              />
              <Input
                type="color"
                value={team.shortsColor}
                onChange={(e) => handleTeamChange(teamIndex, 'shortsColor', e.target.value)}
                title="Color pantalón"
              />
            </div>
            <h3 className="font-semibold mb-1">Jugadores</h3>
            <div className="grid grid-cols-4 gap-1 mb-4">
              {team.players.map((player, playerIndex) => (
                <Input
                  key={playerIndex}
                  placeholder={`#${playerIndex + 1}`}
                  value={player}
                  onChange={(e) => handlePlayerChange(teamIndex, playerIndex, e.target.value)}
                />
              ))}
            </div>
            <h3 className="font-semibold mb-1">Responsables</h3>
            <div className="grid grid-cols-1 gap-1">
              {team.staff.map((person, staffIndex) => (
                <Input
                  key={staffIndex}
                  placeholder={`Responsable ${staffIndex + 1}`}
                  value={person}
                  onChange={(e) => handleStaffChange(teamIndex, staffIndex, e.target.value)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SetupTeams;
