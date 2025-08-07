class SecondMax{
    public static void main(String args[]){
       int[] arr1={15};
       int  maxEle=arr1[0];
      int secondMax=Integer.MIN_VALUE;
        if(arr1.length<2){
           System.out.println("Second max not possible!");
           System.exit(0);

        }
        for(int i=0;i<arr1.length;i++){
            if(arr1[i]>maxEle){
                secondMax=maxEle;
                maxEle=arr1[i];
            }
            else if(arr1[i]>secondMax && arr1[i]!=maxEle){
                secondMax=arr1[i];

            }
        }
        System.out.println("Second max is "+secondMax);

    }
}