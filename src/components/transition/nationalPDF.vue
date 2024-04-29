<template>
  <div class="national-pdf">
    <div class="content">
        <div class="icon-pdf"><i class="ri-file-pdf-2-fill"></i></div>
        <div class="text">
            <div class="text1">Proffesion Practice Letter.pdf</div>
            <div class="text2">3 mb</div>
        </div>
    </div>
    <div class="iconPDF"><i class="ri-close-line"></i></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .national-pdf{
        width: 240px;
height: 48px;
padding: 8px;
display: flex;
gap: 8px;
border-radius: 8px;
border: 1px;
background: rgba(248, 248, 248, 1);
border: 1px solid rgba(243, 243, 243, 1);

    }

    .national-pdf .content{
        width: 200px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
gap: 12px;

    }

    .national-pdf .content .icon-pdf{
        color: rgba(255, 0, 0, 1);
        font-size: 24px;


    }


    .national-pdf .content .text{
        width: 172px;
height: 32px;



display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
gap: 4px;

    }


    .national-pdf .content .text .text1{
        width: 172px;
height: 15px;
font-size: 12px;
font-weight: 500;
line-height: 15.12px;
text-align: left;
color: rgba(42, 42, 42, 1);


    }


    .national-pdf .content .text .text2{
        width: 24px;
height: 13px;

font-size: 10px;
font-weight: 400;
line-height: 12.6px;
text-align: left;
color: rgba(109, 109, 109, 1);



    }


    .national-pdf .iconPDF{
        width: 16px !important;
height: 16px !important;
padding: 4px !important;


    

    }


    .national-pdf .iconPDF i{
        color: rgba(191, 191, 191, 1) !important;
        
    }
</style>