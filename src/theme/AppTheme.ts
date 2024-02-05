import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calcContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  calcResult: {
    color: 'white',
    fontSize: 64,
    textAlign: 'right',
  },
  previousResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 32,
    textAlign: 'right',
  },
  calcButtons: {
    gap: 24,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '300',
  },
});
