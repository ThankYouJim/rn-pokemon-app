import React from 'react';

import Bug from '../../assets/types/bug.svg';
import Dark from '../../assets/types/dark.svg';
import Dragon from '../../assets/types/dragon.svg';
import Electric from '../../assets/types/electric.svg';
import Fairy from '../../assets/types/fairy.svg';
import Fighting from '../../assets/types/fighting.svg';
import Fire from '../../assets/types/fire.svg';
import Flying from '../../assets/types/flying.svg';
import Ghost from '../../assets/types/ghost.svg';
import Grass from '../../assets/types/grass.svg';
import Ground from '../../assets/types/ground.svg';
import Ice from '../../assets/types/ice.svg';
import Normal from '../../assets/types/normal.svg';
import Poison from '../../assets/types/poison.svg';
import Psychic from '../../assets/types/psychic.svg';
import Rock from '../../assets/types/rock.svg';
import Steel from '../../assets/types/steel.svg';
import Water from '../../assets/types/water.svg';

const styles = {width: 20, height: 20};

const Icons = ({type}) => {
  switch (type) {
    case 'Bug':
      return <Bug {...styles} />;
    case 'Dark':
      return <Dark {...styles} />;
    case 'Dragon':
      return <Dragon {...styles} />;
    case 'Electric':
      return <Electric {...styles} />;
    case 'Fairy':
      return <Fairy {...styles} />;
    case 'Fighting':
      return <Fighting {...styles} />;
    case 'Fire':
      return <Fire {...styles} />;
    case 'Flying':
      return <Flying {...styles} />;
    case 'Ghost':
      return <Ghost {...styles} />;
    case 'Grass':
      return <Grass {...styles} fill={'#78c84f'} />;
    case 'Ground':
      return <Ground {...styles} />;
    case 'Ice':
      return <Ice {...styles} />;
    case 'Normal':
      return <Normal {...styles} />;
    case 'Poison':
      return <Poison {...styles} />;
    case 'Psychic':
      return <Psychic {...styles} />;
    case 'Rock':
      return <Rock {...styles} />;
    case 'Ice':
      return <Ice {...styles} />;
    case 'Steel':
      return <Steel {...styles} />;
    case 'Water':
      return <Water {...styles} />;
    default:
      return <></>;
  }
};

export default Icons;
