import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    color: '#282830',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_started: {
    backgroundColor: '#282830',
    color: '#f5f5f5',
  },
  tags: {
    marginBottom: 50,
  },
  timer: {
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 30,
    minWidth: 260
  },
  timer__camp: {
    alignItems: "baseline"
  },
  timer__time: {
    fontSize: 60
  },
  timer__unid: {
    fontSize: 20
  },
  controls__bot: {
    margin: 5,
    backgroundColor: "#0003",
    borderRadius: 30,
    padding: 10,
  }
})
