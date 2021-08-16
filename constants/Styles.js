import Colors from "./Colors";

export default {
   extralightText: {
      fontWeight: '100',
      fontFamily: 'cairoExtraLight'
   },
   lightText: {
      fontWeight: '300',
      fontFamily: 'cairoLight'
   },
   mediumText: {
      fontWeight: '500',
      fontFamily: 'cairoRegular'
   },
   semiBoldText: {
      fontWeight: '700',
      fontFamily: 'cairoSemiBold'
   },
   boldText: {
      fontWeight: '900',
      fontFamily: 'cairoBold'
   },
   flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   labelText: {
      color: Colors.text,
      fontSize: 12,
      textAlign: "right",
      fontWeight: '700',
      fontFamily: 'cairoSemiBold'
   },
   textInput: {
      textAlign: "right",
      borderWidth: 1,
      borderColor: Colors.borderColor,
      fontSize: 16,
      opacity: 0.9,
      borderRadius: 8,
      marginVertical: 10,
      fontWeight: '500',
      fontFamily: 'cairoRegular'
   },
   errorText: {
      textAlign: 'right',
      color: Colors.danger,
      marginHorizontal: 5,
      textTransform: 'capitalize',
      fontWeight: '500',
      fontFamily: 'cairoRegular'
   },
   cardShadow: {
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
   },
}