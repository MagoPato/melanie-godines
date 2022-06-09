presona ps = new presona("Ary Shardey",05,04,2003);
String dia = "05/04";
cumpleaños = ps.getCumpleaños();
    while(true){
        if(dia.equals(cumpleaños)){
            System.out.println(" happy birthday " + ps.getNombre());
            break;
        }else{
        System.out.println(" hoy no es el cumpleaños de " + ps.getNombre());
        }
    }
}