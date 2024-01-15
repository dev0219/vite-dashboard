<template>
  <div class="print-container">
       <div class="print-image">
          <img src="../images/constructor.png" />
       </div>
       <div class="print-configure">
            <div class="print-configure-header">
                <HeaderTitle title="Configure your print" />
            </div>
            <div class="print-configure-options">
              <Accordion :activeIndex="null" expand-icon="pi pi-chevron-down" collapse-icon="pi pi-chevron-up" class="custom-accordion">
                    <AccordionTab>
                        <template #header>
                            <AccoridionTabHeaderComponent type="picture" />
                        </template>
                        <div class="picture-content">
                            <img src="../images/add_photo.png" @click="Dialogevisible = true"/>
                            <PictureItemComponent url="picture.png" iserror="true" />
                            <PictureItemComponent url="picture.png" iserror="false" />
                            <div class="picture-actions">
                                <hr/>
                                <PictureActionComponent src="crop.png" title="Crop" />
                                <PictureActionComponent src="border.png" title="Border" />
                                <PictureActionComponent src="bw.png" title="B&W" />
                                <PictureActionComponent src="trash.png" title="Delete" />
                            </div>
                        </div>
                    </AccordionTab>
                    <AccordionTab>
                        <template #header>
                            <AccoridionTabHeaderComponent type="paper" />
                        </template>
                        <div class="paper-canvas-content">
                            <PaperRadioComponent radioName="Paper" val="paper" :value="paperCanvasInfo.radioVal" />
                            <PaperRadioComponent radioName="Canvas" val="canvas" :value="paperCanvasInfo.radioVal" />
                            <hr/>
                            <Dropdown v-model="selectedCategory" :options="paperSelections" optionLabel="name" placeholder="Select one..." class="custom-dropdown" />
                            <PaperDetailComponent url="paper.png" description="Experience the refined elegance of Canson Arches BFK Rives (White) 310gsm, a 100% cotton fine art paper infused with centuries of French craftsmanship. A perfectly balanced soft grain paper that brings out the detail in every image." />
                        </div>
                    </AccordionTab>
                    <AccordionTab>
                        <template #header>
                            <AccoridionTabHeaderComponent type="matting" />
                        </template>
                        <div class="matting-content">
                            <SliderComponent :sliderValue="mattingInfo.sliderValue" :advancedOptionVisible="advancedOptionVisible" />
                            <div class="advanced-matting-opt" v-show="!advancedOptionVisible">
                                <MattingSizeContainer />
                                <MattingColorContainer />                                                               
                            </div>                            
                            <div class="advanced-enalble-action" @click="handleVisible(advancedOptionVisible)">{{ advancedOptionVisible ? 'Advanced Options' : 'Disable Advanced Options' }}</div>
                        </div>
                    </AccordionTab>   
              </Accordion>
            </div>
            <div class="add-cart-container">
                <CartAmountComponent :unit="qtyInfo.unit" :amount="qtyInfo.amount" />
                <div class="add-cart-details">
                    <QtyComponent :value="qtyInfo.qty" />
                    <AddCartActionComponent />                 
                </div>
                <AddCartTermsComponent />
            </div>
            <DialogComponent v-model:visible="Dialogevisible" modal header="<-" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                    <template #header>
                        <div class="">
                            <i class="pi pi-arrow-left"></i>
                        </div>
                    </template>
                <div class="drag-drop-container">
                    <DragDropComponent />
                </div>
            </DialogComponent>
       </div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref, watch} from 'vue'
import HeaderTitle from "../components/HeaderTitle.vue";
import AccoridionTabHeaderComponent from "../components/AccoridionTabHeaderComponent.vue";
import PictureItemComponent from "../components/PictureItemComponent.vue";
import PictureActionComponent from "../components/PictureActionComponent.vue";
import PaperRadioComponent from "../components/PaperRadioComponent.vue";
import PaperDetailComponent from "../components/PaperDetailComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import MattingSizeContainer from "../components/MattingSizeContainer.vue";
import MattingColorContainer from "../components/MattingColorContainer.vue";
import AddCartTermsComponent from "../components/AddCartTermsComponent.vue";
import AddCartActionComponent from "../components/AddCartActionComponent.vue";
import CartAmountComponent from "../components/CartAmountComponent.vue";
import QtyComponent from "../components/QtyComponent.vue";
import DragDropComponent from "../components/DragDropComponent.vue";
import { paperCanvasInfo, mattingInfo ,qtyInfo} from '../store/todoStore'

export default defineComponent({
  components: { HeaderTitle, AccoridionTabHeaderComponent,PictureItemComponent,PictureActionComponent ,PaperRadioComponent,PaperDetailComponent,SliderComponent,MattingSizeContainer, MattingColorContainer, AddCartTermsComponent, AddCartActionComponent,CartAmountComponent,QtyComponent,DragDropComponent},
  setup () {
    const menu1 = ref(['track order']);
    const menu2 = ref(['chnage delivery addresses', 'chnage registration data']);
    const selectedCategory = ref();
    const paperSelections = ref([
        { name: 'Canson ARCHES BFK Rives W 310gr', code: '1' },
        { name: 'PVC', code: '2' }
    ]);
    const advancedOptionVisible = ref(true);
    const Dialogevisible = ref(false);

    const handleVisible = (value: boolean) => {

        advancedOptionVisible.value = !value;
        console.log("--- matting information")
        console.log(mattingInfo)

        console.log("--- qty information")
        console.log(qtyInfo)
    }
    
    return {
      menu1,
      menu2,
      mattingInfo,
      selectedCategory,
      Dialogevisible,
      advancedOptionVisible,
      paperSelections,
      handleVisible,
      paperCanvasInfo,
      qtyInfo
    };
  }
})
</script>
