/*
* This file is dedicated to uploading the long thai version of the explanatory statement onto the firestore
* */

function uploadExplanatoryStatement_th_long(){
    let contents = "<center><b>(กลุ่มผู้เข้าร่วมสำรวจ)</b></center><br>" +
        "<b>Project ID: 29459</b><br>" +
        "<b>ชื่อโครงการ: งานที่ยั่งยืนผ่านแอพพลิเคชั่น Women-in-tech สำหรับสตรีสูงอายุในมาเลเซียและไทย: การบูรณาการการวิจัยเชิงปฏิบัติการและแน" +
        "วทางการออกแบบทางวิทยาศาสตร์</b><br><br>" +
        "<center><b>อีเมลโครงการ: womenintech@monash.edu</b></center><br>" +
        "<b>Professor Teh Pei Lee</b><br>" +
        "คณะบริหารธุรกิจ<br>" +
        "โทรศัพท์: +603-55144971<br>" +
        "อีเมล: teh.pei.lee@monash.edu<br><br>" +
        "<b>Dr Ewilly Liew Jie Ying</b><br>" +
        "คณะบริหารธุรกิจ<br>" +
        "โทรศัพท์: +603-55145872<br>" +
        "อีเมล: ewilly.liew@monash.edu<br><br>" +
        "คุณได้รับเชิญให้เข้าร่วมในการศึกษานี้ โปรดอ่านคำชี้แจงนี้ให้ครบถ้วนก่อนตัดสินใจว่าจะเข้าร่วมในการวิจัยนี้หรือไม่ " +
        "หากคุณต้องการข้อมูลเพิ่มเติมเกี่ยวกับแง่มุมใด ๆ ของโครงการนี้ โปรดติดต่อนักวิจัยผ่านหมายเลขโทรศัพท์หรือที่อยู่อีเมลที่ระบุไว้ข้างต้น<br><br>" +
        "<b>การวิจัยเกี่ยวข้องกับอะไร?</b><br><br>" +
        "ในมาเลเซียและไทย มีผู้หญิงสูงอายุจำนวนมากซึ่งเป็นกลุ่มไม่มีมั่นคงทางการเงินและมีความรอบรู้ด้านดิจิทัลน้อยกว่" +
        "าคนทั่วไป ความเร่งด่วนเพิ่มขึ้นจากการระบาดใหญ่ของโควิด-19 ซึ่งส่งผลกระทบอย่างมีนัยสำคัญต่อสตรีสูงอายุ เนื่องจากความกลัวและความเปราะบ" +
        "างที่จะเสี่ยงต่อการติดเชื้อ ตกงาน และสูญเสียการสนับสนุนทางสังคม ด้วยสภาพการล็อกดาวน์และการปิดสถานที่ทำงาน ควรมีทางเลือกสำหรับผู้หญิงสูงอ" +
        "ายุที่ไม่ค่อยเชื่อมต่อกับระบบดิจิทัลซึ่งเต็มใจที่จะปรับตัวและเรียนรู้ การศึกษานี้มีวัตถุประสงค์เพื่อศึกษาความตระหนัก ความต้องการ ความรู้ ทัศนคติ " +
        "และการปฏิบัติต่อเทคโนโลยีของสตรีสูงอายุในพื้นที่ชนบทในประเทศมาเลเซียและประเทศไทยในปัจจุบัน<br><br>" +
        "เราต้องการเข้าใจความต้องการและการรับรู้ของคุณเกี่ยวกับการเรียนรู้ทักษะชีวิตและ/หรือทักษะที่เกี่ยวข้องกับงานโดยใช้แอปพลิเคชันมือถือ " +
        "ข้อมูลที่คุณให้จะถูกตีความและแปลจากแง่มุมทางสังคมและวัฒนธรรมไปสู่การออกแบบแอปพลิเคชันมือถือใหม่ แอพ Women-in-tech เพื่อช่วยให้ผู้หญิงที่มีอ" +
        "ายุมากกว่าในพื้นที่ชนบทปรับตัวเทคโนโลยีและเรียนรู้ออนไลน์ แอพมือถือ Women-in-tech ออกแบบมาเพื่อให้บริการแนะนำปัญญาประดิษฐ์ AI " +
        "เพื่อช่วยในการเลือกตัวเลือกการเรียนรู้ออนไลน์สำหรับผู้หญิงที่มีอายุมากกว่า<br><br>" +
        "คุณได้รับเชิญให้ตอบแบบสำรวจแชทบอทในแอปพลิเคชันมือถือที่พัฒนาโดยนักวิจัยของ Monash Malaysia แบบสำรวจแชทบอทจะเกิดขึ้นบนเ" +
        "ว็บเบราว์เซอร์โดยใช้โทรศัพท์มือถือของคุณ และจะใช้เวลาประมาณ 15 – 30 นาทีจึงจะเสร็จสมบูรณ์ ในตอนท้ายของแบบสำรวจแชทบ็อต " +
        "คุณจะถูกนำส่งไปยังแบบฟอร์ม Qualtrics อื่นเพื่อระบุตัวเลือกของคุณ หากคุณต้องการเลือกรับการติดต่อเพื่อสัมภาษณ์ติดตามผลภายในอีกหก (6) " +
        "เดือนข้างหน้า<br><br>" +
        "<b>การจ่ายเงิน/ค่าตอบแทน</b><br><br>" +
        "คุณจะได้รับสิ่งแสดงความขอบคุณเป็นเงินสด RM 10 ผ่านการทำธุรกรรมออนไลน์เมื่อเสร็จสิ้นการสำรวจแชทบอท ในตอนท้ายของแบบสำรวจแชทบอท " +
        "คุณจะถูกนำส่งไปยังแบบฟอร์ม Qualtrics อื่นเพื่อระบุตัวเลือกของคุณ หากคุณต้องการรับเงินคืนผ่าน (a) การโอนเงินผ่านธนาคารออนไลน์หรือ " +
        "(b) การโอน e-wallet ออนไลน์ โดยเฉพาะอย่างยิ่ง คุณจะถูกขอให้ระบุรายละเอียดการธนาคาร เช่น ชื่อผู้รับเงิน หมายเลขโทรศัพท์ผู้รับเงิน " +
        "หมายเลขบัตรประจำตัวผู้รับเงิน หมายเลขบัญชีธนาคาร ชื่อธนาคาร และที่อยู่อีเมล สำหรับการทำธุรกรรมออนไลน์และเพื่อวัตถุประสงค์ในการตรวจสอบ" +
        "โดยทีมการเงินของ Monash จะไม่เปิดเผยชื่อ แต่ข้อมูลส่วนบุคคลเหล่านี้ใช้เพื่อวัตถุประสงค์ในการทำธุรกรรมออนไลน์เพื่อแสดงความขอบคุณเท่านั้น " +
        "และไม่นำไปใช้ในส่วนอื่น ๆ ของการศึกษา ข้อมูลเพิ่มเติมจะถูกเก็บไว้แยกต่างหากและจะไม่เชื่อมโยงกับคำตอบแบบสำรวจแชทบ็อตของคุณ " +
        "หลังจากการเบิกจ่ายเงินสด ข้อมูลการชำระเงินทั้งหมดจะถูกลบออกจากแพลตฟอร์ม Qualtrics อย่างถาวร โปรดดูคำชี้แจงสิทธิ์ส่วนบุคคลของ " +
        "<a href='https://www.qualtrics.com/privacy-statement/' target='_blank'>Qualtrics</a>" +
        " สำหรับข้อมูลเพิ่มเติม<br><br>" +
        "<b>ขั้นตอนการวิจัย</b><br><br>" +
        "แบบสำรวจแชทบอทกำหนดให้คุณต้องเข้าถึงแบบสำรวจบนเว็บเบราว์เซอร์โดยใช้โทรศัพท์มือถือของคุณ ดังนั้น หมายเลขโทรศัพท์มือถือของคุณจะต้องใช้เป็น" +
        "ตัวระบุเฉพาะเพื่อเริ่มการสำรวจแชทบอท เมื่อคุณส่งแบบสำรวจของคุณแล้ว เราจะยกเลิกการระบุคำตอบแบบสำรวจของคุณจากหมายเลขโทรศัพท์มือถือขอ" +
        "งคุณหลังจากที่แบบสำรวจแชทบอทสิ้นสุดลง คำตอบที่คุณส่งมาจะได้รับ ID ที่ไม่ระบุตัวตน และจะทำการวิเคราะห์เฉพาะคำตอบแบบสำรวจที่ไม่ระบุตัวตน" +
        "เท่านั้น คุณสามารถเลือกตอบแบบสำรวจแชทบอทได้ 4 ภาษา ได้แก่ อังกฤษ บาฮาซามาเลเซีย จีนกลาง และไทย<br><br>" +
        "<b>ทำไมคุณถึงได้รับเชิญให้เข้าร่วมการวิจัยนี้?</b><br><br>" +
        "การเข้าร่วมการศึกษานี้เป็นไปโดยสมัครใจ ขอเชิญสตรีที่มีอายุ 50 ปีขึ้นไปเข้าร่วมการศึกษาวิจัยนี้ เราสนใจในความต้องการและการรับรู้ของคุณเกี่ยวกับ" +
        "การใช้เทคโนโลยีเพื่อการเรียนรู้และมุมมองเกี่ยวกับการใช้แอปพลิเคชันมือถือสำหรับการเรียนรู้ออนไลน์โดยใช้บริการแนะนำแบบ AI<br><br>" +
        "<b>แหล่งเงินทุน</b><br><br>" +
        "การศึกษานี้ได้รับการสนับสนุนโดยโครงการทุนวิจัยเพื่อการพัฒนาอย่างยั่งยืน MUM-ASEAN 2021 – 2023<br><br>" +
        "<b>การยินยอมเข้าร่วมโครงการและขอถอนตัวจากการวิจัย</b><br><br>" +
        "การเข้าร่วมในการศึกษานี้เป็นไปโดยสมัครใจ และคุณไม่จำเป็นต้องยินยอมเข้าร่วมก็ได้ การทำแบบสำรวจต่อแสดงว่าคุณยินยอมที่จะมีส่วนร่วมในการวิจัยนี้แ" +
        "ละยอมรับข้อมูลที่ให้ไว้ในคำชี้แจงคำอธิบาย คุณสามารถถอนตัวออกจากการศึกษาได้ตลอดเวลาในระหว่างการสำรวจแชทบอท เราสามารถถอนคำตอบที่คุณส่" +
        "งมาได้ก่อนที่แบบสำรวจแชทบอทจะสิ้นสุดลง อย่างไรก็ตาม เมื่อแบบสำรวจแชทบอทสิ้นสุดลง คำตอบที่คุณส่งมาจะไม่ถูกระบุตัวตนจากหมายเลขโท" +
        "รศัพท์มือถือของคุณ ณ จุดนั้น เราไม่สามารถถอนคำตอบของคุณออกจากการศึกษาได้ เมื่อคำตอบที่คุณส่งมาถูกป้อนลงในฐานข้อมูลหลังจากแบบสำรวจแชทบ็อ" +
        "ตสิ้นสุดลง เนื่องจากเราไม่สามารถติดตามคำตอบของคุณได้อีกเมื่อข้อมูลที่เรียงกันถูกลบการระบุและไม่ระบุชื่อ<br><br>" +
        "<b>ผลประโยชน์และความเสี่ยงที่อาจเกิดขึ้นกับผู้เข้าร่วม</b><br><br>" +
        "ผลการศึกษาจะช่วยปรับปรุงความเข้าใจของเราเกี่ยวกับแนวทางปรับปรุงเทคโนโลยีให้เป็นมิตรต่อผู้สูงวัย " +
        "โดยอิงตามบทบาทของการออกแบบทางสังคมและเทคนิคและการพัฒนาความสามารถของปัญญาประดิษฐ์ (AI) " +
        "สำหรับอนาคตของผู้หญิงสูงอายุในประเทศกำลังพัฒนา สิ่งนี้จะช่วยนักวิจัยและหน่วยงานของรัฐในการพิจารณาวิธีแก้ปัญหาทางเทคโนโลยีใหม่ ๆ " +
        "เพื่อปรับปรุงสวัสดิการทางเศรษฐกิจและสังคมของสตรีสูงอายุในโลกที่มีการแข่งขัน<br><br>" +
        "ไม่มีความเสี่ยงที่คาดการณ์ได้ในระยะสั้นหรือระยะยาว ยกเว้นเวลาที่ใช้ในการสำรวจ โดยใช้โทรศัพท์มือถือของผู้เข้าร่วมตอบคำถามแบบสำรวจผ่าน" +
        "แชทบอทที่มีเทคโนโลยีต่ำ<br><br>" +
        "<b>การรักษาความลับ</b><br><br>" +
        "เป็นโครงการวิจัยที่เกี่ยวข้องกับนักวิจัยจากมหาวิทยาลัยโมนาช ประเทศมาเลเซีย และมหาวิทยาลัยธรรมศาสตร์ ประเทศไทย ข้อมูลทั้งหมดที่คุณให้ไว้จะ" +
        "ไม่เปิดเผยชื่อ ดังนั้น คุณจะได้รับการระบุ ID ที่ไม่ระบุตัวตนเมื่อเสร็จสิ้นการสำรวจแชทบอท และคำตอบของคุณจะถูกเก็บเป็นความลับ คำตอบของคุณจะ" +
        "ไม่ถูกระบุ และจะไม่มีการรายงานผลลัพธ์ของบุคคลใดบุคคลหนึ่ง เฉพาะนักวิจัยจาก Monash University Malaysia เท่านั้นที่จะสามารถเข้าถึงข้อมูล" +
        "ทั้งหมดได้ นอกจากนี้ ผลงานจะได้รับการตีพิมพ์ในวารสาร peer review, หนังสือ/หนังสือ, วิทยานิพนธ์ของนักศึกษา และนำเสนอในที่ประชุม " +
        "เมื่อสิ้นสุดการสำรวจ คุณสามารถเลือกรับการติดต่อเกี่ยวกับโครงการวิจัยในอนาคต (ที่เกี่ยวข้อง) ซึ่งได้รับการอนุมัติทางจริยธรรมแล้ว " +
        "หากคุณเลือกที่จะรับการติดต่อ (เป็นทางเลือก) คุณจะถูกนำส่งไปยังแบบสำรวจ Qualtrics อื่น ซึ่งคุณสามารถระบุชื่อและหมายเลขโทรศัพท์มือถือของคุณได้ " +
        "ข้อมูลทางเลือกที่ให้ไว้นี้จะไม่เชื่อมโยงกับคำตอบแบบสำรวจของคุณ<br><br>" +
        "<b>การจัดเก็บข้อมูล</b><br><br>" +
        "ข้อมูลที่เก็บรวบรวมจะถูกจัดเก็บและเก็บรักษาตามระเบียบของมหาวิทยาลัย Monash สำหรับสำเนาข้อมูลทั้งหมดที่ได้รับในรูปแบบกระดาษ " +
        "ข้อมูลเหล่านี้จะถูกคัดลอกเป็นรูปแบบอิเล็กทรอนิกส์และสำเนาต้นฉบับจะถูกทำลาย ด้วยเหตุนี้ ข้อมูลทั้งหมดจะถูกจัดเก็บในรูปแบบดิจิทัลที่มีการป้องกันด้วย" +
        "รหัสผ่าน และมีเพียงนักวิจัยที่เกี่ยวข้องในการศึกษานี้เท่านั้นที่จะสามารถเข้าถึงข้อมูลได้ ข้อมูลในรูปแบบดิจิทัลจะถูกลบออกอย่างถาวรหากไม่จำเป็นอีกต่อไ" +
        "ปหรือไม่เกินห้า (5) ปี<br><br>" +
        "<b>การใช้ข้อมูลเพื่อวัตถุประสงค์อื่น</b><br><br>" +
        "การวิเคราะห์ข้อมูลจะดำเนินการตามข้อมูลที่ลบข้อมูลส่วนบุคคลที่สามารถระบุตัวตนได้ทั้งหมด ผู้เข้าร่วมสามารถติดต่อนักวิจัยเพื่อทราบผลการวิเคราะห์ที่ดำ" +
        "เนินการตามข้อมูลที่ลบข้อมูลส่วนบุคคลที่สามารถระบุตัวตนได้ทั้งหมด ตามแนวทางการแบ่งปันข้อมูล ข้อมูลที่ไม่ระบุตัวตนอาจพร้อมใช้งานโดยนักวิจัยคนอื่น " +
        "ๆ ข้อมูลนี้จะถูกเก็บไว้ในที่เก็บข้อมูลสาธารณะที่ปลอดภัยและอาจเป็นข้อกำหนดของวารสารบางฉบับก่อนเผยแพร่ ข้อมูลที่แชร์จะไม่รวมรายละเอียดการร" +
        "ะบุตัวตนของคุณ<br><br>" +
        "<b>ผลลัพธ์</b><br><br>" +
        "หากท่านต้องการทราบผลการวิจัย โปรดติดต่อ Professor Teh Pei Lee ที่โทรศัพท์: +603-55144971 หรืออีเมล: teh.pei.lee@monash.edu.<br><br>" +
        "<b>ร้องเรียน</b><br><br>" +
        "หากคุณมีข้อสงสัยหรือข้อร้องเรียนเกี่ยวกับการดำเนินการของโครงการ โปรดติดต่อเจ้าหน้าที่ดังต่อไปนี้<br><br>" +
        "<b>Ms. Jocelyn Fam<br>" +
        "Quality and Governance, Monash University Malaysia<br>" +
        "Jalan Lagoon Selatan, 47500, Bandar Sunway, Selangor Darul Ehsan, Malaysia.<br>" +
        "โทรศัพท์: (+603) 5514 5664<br>" +
        "อีเมล: jocelyn.fam@monash.edu</b><br><br>" +
        "ขอขอบคุณ.<br><br><br>" +
        "<b>Dr. Teh Pei Lee</b><br>" +
        "ศาสตราจารย์<br>" +
        "คณะบริหารธุรกิจ, Monash University Malaysia.<br>" +
        "โทรศัพท์: +603-55144971; อีเมล: teh.pei.lee@monash.edu"

    firebase.firestore().collection("ExplanatoryStatement").doc("ExplanatoryStatement_th_long").set({
        contents: contents
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}