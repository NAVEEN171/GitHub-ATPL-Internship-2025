public class Users {
    public static void main(String args[]){
        UserProfile user=new UserProfile();
        System.out.println("name setting...");
        user.setUserName("naveen");
        System.out.println(user.getUserName()); 
        
        System.out.println("password is empty condition: "+user.isPasswordEmpty());
        System.out.println("password len is : "+user.getPasswordLength());
    }
}

class UserProfile{
    private String userName;
    private String password;
    private String email;
   UserProfile(){
   
   }

   public String getPassword(){
        return this.password!=null?password:"";
   }

   public String getUserName(){
    return this.userName!=null?userName:"";
   }

   public String getEmail(){
    return this.email!=null?this.email:"";
   }

   public boolean isPasswordEmpty(){
        return password==null || password.length()==0;
   }
   public int getPasswordLength(){
    return password!=null?password.length():0;
   }

   private boolean isValidUserName(String name){
    if(name!=null && !name.trim().isEmpty()){
        return true;
    } 
    else{
        System.out.println("username is Invalid! ");
        return false;   
    }
   }

   private boolean isValidPassword(String password){
     if(password!=null && password.length()>7 ){
        return true;
    }
    else{
        System.out.println("Password Should not be empty or need to have min characters if 8");
        return false;
    }
   }

   private boolean isValidEmail(String email){
     if(email!=null && email.contains("@") && email.contains(".")){
        return true;
    }
    else{
        System.out.println("Email should be valid! should contain @ and .");
        return false;
    }
   }

   public void setUserName(String name){
     if(isValidUserName(name)){
        this.userName=name;
     }
   }
   public void setPassword(String password){
       if(isValidPassword(password)){
        this.password=password;
       }
   }
   public void setEmail(String email){
      if(isValidEmail(email)){
        this.email=email;
      }
   }
   
}