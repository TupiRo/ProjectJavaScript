/**
 * Created by Rodrigo Zarate on 3/6/2015.
 */

function operations(){

    var inputNumbers= prompt("Introduce the Values:");
    var sep= inputNumbers.split(',');
    var arrayNumbers= [];
    for (var i=0; i < sep.length; i++)
    {
        arrayNumbers[i]= parseInt(sep[i]);
    }

    window.alert('******* The MAX ******** = '+max(arrayNumbers));
    window.alert('******* The MIN ******** = '+min(arrayNumbers));
    window.alert('******* The SUM ******** = '+addition(arrayNumbers));
    window.alert('******* The AVG ******** = '+avg(arrayNumbers));
};

function max(num,pos,maxi){

    if(pos==undefined)
        pos=num.length -1

    if (maxi== undefined)
        maxi=num[pos];

    if(pos==0)
        return maxi;

    if(maxi<num[pos-1])
        maxi=num[pos-1];

    return max(num,pos-1,maxi);


};
function min(num,pos, minu){
    if(pos==undefined)
        pos=num.length -1

    if (minu== undefined)
        minu=num[pos];

    if(pos==0)
        return minu;

    if(minu>num[pos-1])
        minu=num[pos-1];

    return min(num,pos-1,minu);

};
function avg(num,pos, suma){
    var prome = 0;
    if(pos==undefined)
        pos=num.length-1;

    if(pos==0) {
        return prome;
    }
    else {
        total = addition(num,pos,suma);
        pos++;
        prome = total/pos;
    }
    return prome;
};
function addition(num,pos, suma)
{
    if(pos==undefined)
        pos=num.length -1

    if (suma== undefined)
        suma=num[pos];

    if(pos==0) {
        return suma;
    }
    else {
        suma = suma + num[pos-1]
    }
    return addition(num,pos-1,suma);
};

