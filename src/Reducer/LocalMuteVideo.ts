import {UidInterface} from 'src/Contexts/PropsContext';
import {ActionType, UidStateInterface} from 'src/Contexts/RtcContext';

export default function UserMuteRemoteAudio(
  state: UidStateInterface,
  action: ActionType<'LocalMuteVideo'>,
) {
  let stateUpdate = {};
  const LocalVideoMute = (user: UidInterface) => {
    if (user.uid === 'local') {
      user.video = action.value[0];
    }
    return user;
  };
  stateUpdate = {
    min: state.min.map(LocalVideoMute),
    max: state.max.map(LocalVideoMute),
  };
  return stateUpdate;
}