import React, {useContext} from 'react';
import {View} from 'react-native';
import PropsContext from '../PropsContext';
import {UidInterface} from '../RtcContext';
import styles from '../Style';
import RemoteAudioMute from './Remote/RemoteAudioMute';
import RemoteSwap from './Remote/RemoteSwap';
import RemoteVideoMute from './Remote/RemoteVideoMute';

interface RemoteControlsInterface {
  showMuteRemoteVideo?: boolean;
  showMuteRemoteAudio?: boolean;
  showRemoteSwap?: boolean;
  user: UidInterface;
}

const RemoteControls: React.FC<RemoteControlsInterface> = (props) => {
  const {styleProps} = useContext(PropsContext);
  const {remoteBtnContainer} = styleProps || {};

  return (
    <View
      style={{...styles.remoteBtnContainer, ...(remoteBtnContainer as object)}}>
      {props.showMuteRemoteAudio !== false ? (
        <RemoteAudioMute user={props.user} />
      ) : (
        <></>
      )}
      {props.showMuteRemoteVideo !== false ? (
        <RemoteVideoMute
          rightButton={!props.showRemoteSwap}
          user={props.user}
        />
      ) : (
        <></>
      )}
      {props.showRemoteSwap !== false ? (
        <RemoteSwap user={props.user} />
      ) : (
        <></>
      )}
    </View>
  );
};

export default RemoteControls;
