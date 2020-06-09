import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  logoShapeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  logo: {
    marginTop: "21%",
    marginRight: 60
  },
  image: {
    alignSelf: "center"
  },
  shape: {
    alignSelf: "flex-end"
  },

  copyright: {
    fontFamily: "Poppins",
    fontSize: 12,
    lineHeight: 22,
    textAlign: "center",
    color: "#380628"
  },
  basetext: {
    fontFamily: "Poppins",
    fontSize: 14,
    lineHeight: 26,
    textAlign: "center",
    color: "#380628"
  },

  inputField: {
    borderRadius: 3,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#9F8A99",
    fontFamily: "Poppins",
    fontSize: 16,
    lineHeight: 24,
    color: "#380628"
  },
  invalidField: {
    borderColor: "#FF3939"
  },
  invalidLabelPin: {
    color: "#FF3939"
  },

  titlePage: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 27,
    textAlign: "center",
    color: "#380628"
  },

  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 75,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: "11.11%",
    marginTop: 25
  },
  authButton: {
    marginHorizontal: 0
  },
  gradientButtonText: {
    fontSize: 17,
    lineHeight: 26,
    textAlign: "center",
    color: "#FFFFFF"
  },

  navLink: {
    fontFamily: "Poppins",
    fontSize: 14,
    lineHeight: 26,
    color: "#D02764",
    alignSelf: "flex-end"
  },
  navLinkReg: {
    fontSize: 12
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: "center"
  },
  checkboxText: {
    marginTop: 6
  },
  signInForm: {
    marginLeft: "9.5%",
    marginRight: "12.8%"
  },
  signUpForm: {
    marginLeft: "10.6%",
    marginRight: "6.1%"
  },
  fieldTitle: {
    alignSelf: "flex-start",
    marginTop: 15
  },
  intro: {
    marginLeft: "10%"
  },

  introText: {
    marginHorizontal: 55
  },

  loginIntroText: {
    marginTop: 39,
    marginLeft: "10%",
    flexWrap: "wrap",
    marginRight: "58.5%"
  },
  bottomText: {
    marginTop: 15
  },
  visibilityHidePinLogin: {
    position: "absolute",
    right: 0,
    width: 35,
    top: 137
  },
  visibilityHidePinRegister: {
    top: 220
  },
  visibilityHidePinRepeatRegister: {
    top: 300
  }
});
