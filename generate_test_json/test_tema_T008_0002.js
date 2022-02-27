/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();
//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[0]= "1)  NO es un derecho de los ciudadanos frente a la administraci&oacute;n:<br/>";
 choices[0]= new Array();
 choices[0][0] = "Formular alegaciones y aportar documentos en cualquier momento del procedimiento, para que sean tenidos en cuenta por el &oacute;rgano competente al redactar la propuesta de resoluci&oacute;n.";
 choices[0][1] = "Identificar las autoridades y el personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[0][2] = "Conocer, en cualquier momento, el estado de la tramitaci&oacute;n de los procedimientos en los que tengan la condici&oacute;n de interesados.";
 choices[0][3] = "Obtener copia de los documentos contenidos en los procedimientos en los que tengan la condici&oacute;n de interesados.";
 answers[0] = 0;
 units[0] = ['8'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 592. Examen TIC A1 Servicio Canario Salud 2012";
 preguntaids[0] = 592


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[1]= "2)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):<br/>";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n General del Estado";
 choices[1][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[1][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[1][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[1] = 3;
 units[1] = ['8'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 642. Ley 40/2015";
 preguntaids[1] = 642


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo a la ley 40/2015 debe abstenerse de intervenir en el procedimiento el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los...<br/>";
 choices[2]= new Array();
 choices[2][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[2][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[2][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[2][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[2] = 3;
 units[2] = ['8'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 496. Ley 40/2015";
 preguntaids[2] = 496


//  Id pregunta: 542 Año de creación de pregunta: 2015
 questions[3]= "4)  La Ley 39/2015 prev&eacute; Registros Electr&oacute;nicos de Apoderamientos:<br/>";
 choices[3]= new Array();
 choices[3][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[3][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[3][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[3][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[3] = 1;
 units[3] = ['8'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 542. ";
 preguntaids[3] = 542


//  Id pregunta: 501 Año de creación de pregunta: 2011
 questions[4]= "5)  Dentro del contexto que marca la Ley 39/2015, un expediente electr&oacute;nico es:<br/>";
 choices[4]= new Array();
 choices[4][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente.";
 choices[4][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica.";
 choices[4][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el tipo de informaci&oacute;n que contengan.";
 choices[4][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[4] = 2;
 units[4] = ['8'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 501. Examen GSI A2 AGE 2010 Promoci&oacute;n Interna";
 preguntaids[4] = 501


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:<br/>";
 choices[5]= new Array();
 choices[5][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[5][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[5][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[5][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[5] = 1;
 units[5] = ['8'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 601. Ley 39/2015";
 preguntaids[5] = 601


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?<br/>";
 choices[6]= new Array();
 choices[6][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[6][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[6][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[6][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[6] = 1;
 units[6] = ['8'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 480. Ley 40/2015";
 preguntaids[6] = 480


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[7]= "8)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)<br/>";
 choices[7]= new Array();
 choices[7][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[7][1] = "garantizar la conservaci&oacute;n del documento";
 choices[7][2] = "garantizar la autenticidad del documento";
 choices[7][3] = "garantizar la integridad del documento";
 answers[7] = 0;
 units[7] = ['8'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 586. Ley 39/2015";
 preguntaids[7] = 586


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[8]= "9)  La recusaci&oacute;n se plantear&aacute;...<br/>";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo verbalmente";
 choices[8][1] = "S&oacute;lo por escrito";
 choices[8][2] = "Verbalmente o por escrito";
 choices[8][3] = "Verbalmente o por escrito siempre que se exprese la causa o causas en que se funda";
 answers[8] = 1;
 units[8] = ['8'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 553. Ley 40/2015";
 preguntaids[8] = 553


//  Id pregunta: 484 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento de los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?<br/>";
 choices[9]= new Array();
 choices[9][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[9][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[9][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[9][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[9] = 0;
 units[9] = ['8'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 484. ";
 preguntaids[9] = 484


//  Id pregunta: 488 Año de creación de pregunta: 2015
 questions[10]= "11)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?<br/>";
 choices[10]= new Array();
 choices[10][0] = "transparencia";
 choices[10][1] = "responsabilidad";
 choices[10][2] = "universalidad";
 choices[10][3] = "publicidad del procedimiento";
 answers[10] = 2;
 units[10] = ['8'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 488. Ley 40/2015. Art&iacute;culo 38.3. 3. Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas, con sujeci&oacute;n a los principios de transparencia, publicidad, responsabilidad, calidad, seguridad, disponibilidad, accesibilidad, neutralidad e interoperabilidad.";
 preguntaids[10] = 488


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[11]= "12)  Se entender&aacute; acreditada la representaci&oacute;n realizada:<br/>";
 choices[11]= new Array();
 choices[11][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[11][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[11][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[11][3] = "todas son correctas";
 answers[11] = 3;
 units[11] = ['8'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 605. Ley 39/2015";
 preguntaids[11] = 605


//  Id pregunta: 513 Año de creación de pregunta: 2019
 questions[12]= "13)  En el inicio de un procedimiento mediante denuncia, se&ntilde;ale la afirmaci&oacute;n correcta:<br/>";
 choices[12]= new Array();
 choices[12][0] = "La presentaci&oacute;n de la denuncia confiere la condici&oacute;n de interesado en el procedimiento";
 choices[12][1] = "Si la denuncia invoca un perjuicio en el patrimonio de las AAPP, la no iniciaci&oacute;n deber&aacute; ser motivada";
 choices[12][2] = "Si el denunciante es uno de los infractores, siempre se le exime del pago de la multa";
 choices[12][3] = "Debe recabarse un informe del Consejo de Estado";
 answers[12] = 1;
 units[12] = ['8'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 513. ";
 preguntaids[12] = 513


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)<br/>";
 choices[13]= new Array();
 choices[13][0] = "las personas jur&iacute;dicas";
 choices[13][1] = "las entidades con personalidad jur&iacute;dica";
 choices[13][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[13][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[13] = 1;
 units[13] = ['8'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 626. Ley 39/2015";
 preguntaids[13] = 626


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[14]= "15)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:<br/>";
 choices[14]= new Array();
 choices[14][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[14][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[14][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[14][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[14] = 1;
 units[14] = ['8'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 532. Ley 39/2015";
 preguntaids[14] = 532


//  Id pregunta: 668 Año de creación de pregunta: 2020
 questions[15]= "16)  Para la tramitaci&oacute;n simplificada, la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas, establece que en el procedimiento de responsabilidad patrimonial:<br/>";
 choices[15]= new Array();
 choices[15][0] = "Transcurridos tres meses desde que se inici&oacute; el procedimiento sin que haya reca&iacute;do y se notifique resoluci&oacute;n expresa o, en su caso, se haya formalizado el acuerdo, podr&aacute; entenderse que la resoluci&oacute;n es contraria a la indemnizaci&oacute;n del particular.";
 choices[15][1] = "Si una vez iniciado el procedimiento el &oacute;rgano competente para su tramitaci&oacute;n considera inequ&iacute;voca la relaci&oacute;n de causalidad entre el funcionamiento del servicio p&uacute;blico y la lesi&oacute;n, as&iacute; como la valoraci&oacute;n del da&ntilde;o y el c&aacute;lculo de la cuant&iacute;a de la indemnizaci&oacute;n, podr&aacute; acordar de oficio la suspensi&oacute;n del procedimiento general y la iniciaci&oacute;n de un procedimiento simplificado.";
 choices[15][2] = "Ser&aacute;n preceptivos en todo caso, adem&aacute;s del tr&aacute;mite de audiencia al interesado, el informe del servicio cuyo funcionamiento haya ocasionado la presunta lesi&oacute;n indemnizable y el dictamen del Consejo de Estado o, en su caso, del &oacute;rgano consultivo de la Comunidad Aut&oacute;noma.";
 choices[15][3] = "Si una vez iniciado el procedimiento el &oacute;rgano competente para su tramitaci&oacute;n considera inequ&iacute;voca la relaci&oacute;n de causalidad entre el funcionamiento del servicio p&uacute;blico y la lesi&oacute;n, as&iacute; como la valoraci&oacute;n del da&ntilde;o y el c&aacute;lculo de la cuant&iacute;a de la indemnizaci&oacute;n, podr&aacute; acordar de oficio la suspensi&oacute;n del procedimiento general y la iniciaci&oacute;n de un procedimiento simplificado, previo informe del Jurado Provincial de Expropiaci&oacute;n que habr&aacute; de ser emitido en el plazo de 5 d&iacute;as.";
 answers[15] = 1;
 units[15] = ['8'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 668. Examen TIC A1 AGE 2018";
 preguntaids[15] = 668


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[16]= "17)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:<br/>";
 choices[16]= new Array();
 choices[16][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[16][1] = "Los hechos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[16][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[16][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[16] = 1;
 units[16] = ['8'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 596. Examen TIC A1 Servicio Canario Salud 2012";
 preguntaids[16] = 596


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:<br/>";
 choices[17]= new Array();
 choices[17][0] = "De oficio.";
 choices[17][1] = "A solicitud del interesado.";
 choices[17][2] = "De oficio o a solicitud del interesado.";
 choices[17][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[17] = 2;
 units[17] = ['8'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 627. Ley 39/2015";
 preguntaids[17] = 627


//  Id pregunta: 657 Año de creación de pregunta: 2020
 questions[18]= "19)  Es FALSO que:<br/>";
 choices[18]= new Array();
 choices[18][0] = "En ning&uacute;n caso se efectuar&aacute;n por medios electr&oacute;nicos las notificaciones en las que el acto a notificar vaya acompa&ntilde;ado de elementos que no sean susceptibles de conversi&oacute;n en formato electr&oacute;nico.";
 choices[18][1] = "Las notificaciones se practicar&aacute;n preferentemente por medios no electr&oacute;nicos.";
 choices[18][2] = "Reglamentariamente las Administraciones podr&aacute;n establecer la obligaci&oacute;n de practicar electr&oacute;nicamente las notificaciones para determinados procedimientos y para ciertos colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica, t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos quede acreditado que tienen acceso y disponibilidad de los medios electr&oacute;nicos necesarios.";
 choices[18][3] = "Cuando el interesado fuera notificado por distintos cauces, se tomar&aacute; como fecha de notificaci&oacute;n la de aqu&eacute;lla que se hubiera producido en primer lugar.";
 answers[18] = 1;
 units[18] = ['8'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 657. Examen TIC A1 AGE 2018";
 preguntaids[18] = 657


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[19]= "20)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:<br/>";
 choices[19]= new Array();
 choices[19][0] = "la Administraci&oacute;n General del Estado";
 choices[19][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[19][2] = "las Entidades Locales";
 choices[19][3] = "todas son correctas";
 answers[19] = 3;
 units[19] = ['8'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 502. Ley 39/2015";
 preguntaids[19] = 502


//  Id pregunta: 490 Año de creación de pregunta: 2014
 questions[20]= "21)  Cu&aacute;l de las siguientes afirmaciones es correcta:<br/>";
 choices[20]= new Array();
 choices[20][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[20][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[20][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[20][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[20] = 1;
 units[20] = ['8'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 490. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[20] = 490


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n:<br/>";
 choices[21]= new Array();
 choices[21][0] = "verbalmente";
 choices[21][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[21][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[21][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[21] = 2;
 units[21] = ['8'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 629. Ley 39/2015";
 preguntaids[21] = 629


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[22]= "23)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:<br/>";
 choices[22]= new Array();
 choices[22][0] = "solo mediante ley";
 choices[22][1] = "reglamentariamente";
 choices[22][2] = "mediante ley o reglamentariamente";
 choices[22][3] = "ninguna es correcta";
 answers[22] = 1;
 units[22] = ['8'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 595. Ley 39/2015";
 preguntaids[22] = 595


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[23]= "24)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:<br/>";
 choices[23]= new Array();
 choices[23][0] = "De los interesados en el procedimiento";
 choices[23][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[23][2] = "Disposiciones generales";
 choices[23][3] = "De los actos administrativos";
 answers[23] = 2;
 units[23] = ['8'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 509. Ley 39/2015";
 preguntaids[23] = 509


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:<br/>";
 choices[24]= new Array();
 choices[24][0] = "Siempre en formato electr&oacute;nico.";
 choices[24][1] = "Siempre en formato papel.";
 choices[24][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[24][3] = "La ley no regula el formato del expediente.";
 answers[24] = 0;
 units[24] = ['8'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 494. Ley 39/2015";
 preguntaids[24] = 494


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:<br/>";
 choices[25]= new Array();
 choices[25][0] = "10 d&iacute;as.";
 choices[25][1] = "15 d&iacute;as.";
 choices[25][2] = "1 mes.";
 choices[25][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[25] = 0;
 units[25] = ['8'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 612. Los tr&aacute;mites que deban ser cumplimentados por los interesados deber&aacute;n realizarse en el plazo de diez d&iacute;as a partir del siguiente al de la notificaci&oacute;n del correspondiente acto, salvo en el caso de que en la norma correspondiente se fije plazo distinto.";
 preguntaids[25] = 612


//  Id pregunta: 660 Año de creación de pregunta: 2020
 questions[26]= "27)  Indique cu&aacute;l de las siguientes opciones es correcta de acuerdo con lo dispuesto en el art&iacute;culo 34.1 de la Ley 40/2015 de 1 de octubre de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico:<br/>";
 choices[26]= new Array();
 choices[26][0] = "Solo ser&aacute;n indemnizables las lesiones producidas al particular provenientes de da&ntilde;os que &eacute;ste no tenga el deber jur&iacute;dico de soportar de acuerdo con la Ley.";
 choices[26][1] = "La cuant&iacute;a de la indemnizaci&oacute;n se calcular&aacute; con referencia al d&iacute;a en el que se present&oacute; la reclamaci&oacute;n ante la administraci&oacute;n.";
 choices[26][2] = "Ser&aacute;n indemnizables las lesiones producidas al particular provenientes de da&ntilde;os que este tenga el deber jur&iacute;dico de soportar de acuerdo con la ley.";
 choices[26][3] = "La indemnizaci&oacute;n procedente nunca podr&aacute; sustituirse por un pago en especie.";
 answers[26] = 0;
 units[26] = ['8'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 660. Examen SSTI A1 Xunta de Galicia 2018 Acceso libre";
 preguntaids[26] = 660


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:<br/>";
 choices[27]= new Array();
 choices[27][0] = "Al Gobierno de la naci&oacute;n";
 choices[27][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[27][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[27][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[27] = 3;
 units[27] = ['8'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 623. Ley 39/2015";
 preguntaids[27] = 623


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[28]= "29)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:<br/>";
 choices[28]= new Array();
 choices[28][0] = "apud acta";
 choices[28][1] = "presencialmente";
 choices[28][2] = "electr&oacute;nicamente";
 choices[28][3] = "todas son correctas";
 answers[28] = 3;
 units[28] = ['8'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 514. Ley 39/2015";
 preguntaids[28] = 514


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[29]= "30)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta:<br/>";
 choices[29]= new Array();
 choices[29][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano colegiado, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[29][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[29][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[29][3] = "Todas son correctas.";
 answers[29] = 1;
 units[29] = ['8'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 575. Ley 40/2015";
 preguntaids[29] = 575


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[30]= "31)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta:<br/>";
 choices[30]= new Array();
 choices[30][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[30][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[30][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[30][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[30] = 1;
 units[30] = ['8'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 574. Ley 40/2015";
 preguntaids[30] = 574


//  Id pregunta: 569 Año de creación de pregunta: 2019
 questions[31]= "32)  Las personas f&iacute;sicas y jur&iacute;dicas en sus relaciones con las Administraciones P&uacute;blicas:<br/>";
 choices[31]= new Array();
 choices[31][0] = "Est&aacute;n obligadas a comunicarse mediante medios electr&oacute;nicos.";
 choices[31][1] = "Deben utilizar la lengua oficial de la Comunidad Aut&oacute;noma en el territorio de la Comunidad Aut&oacute;noma.";
 choices[31][2] = "Deber&aacute;n presentar todos los documentos que les soliciten las Administraciones P&uacute;blicas relacionados con el procedimiento, incluidos los que hayan sido elaborados por &eacute;stas.";
 choices[31][3] = "Tienen derecho a conocer, en cualquier momento, el estado de la tramitaci&oacute;n de los procedimientos en los que tengan la condici&oacute;n de interesados.";
 answers[31] = 3;
 units[31] = ['8'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 569. Examen TIC A1 AGE 2017";
 preguntaids[31] = 569


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[32]= "33)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:<br/>";
 choices[32]= new Array();
 choices[32][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[32][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[32][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[32][3] = "todas son correctas";
 answers[32] = 3;
 units[32] = ['8'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 567. Ley 40/2015";
 preguntaids[32] = 567


//  Id pregunta: 591 Año de creación de pregunta: 2015
 questions[33]= "34)  No es objetivo de la Ley 39/2015:<br/>";
 choices[33]= new Array();
 choices[33][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[33][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[33][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[33][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[33] = 2;
 units[33] = ['8'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 591. ";
 preguntaids[33] = 591


//  Id pregunta: 520 Año de creación de pregunta: 2010
 questions[34]= "35)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:<br/>";
 choices[34]= new Array();
 choices[34][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[34][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podr&aacute;n ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[34][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[34][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[34] = 2;
 units[34] = ['8'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 520. Art&iacute;culo 4 RD 1671/2009";
 preguntaids[34] = 520


//  Id pregunta: 499 Año de creación de pregunta: 2014
 questions[35]= "36)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:<br/>";
 choices[35]= new Array();
 choices[35][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[35][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[35][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica.";
 choices[35][3] = "Carta de servicios electr&oacute;nicos.";
 answers[35] = 1;
 units[35] = ['8'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 499. Examen GSI A2 AGE 2013. OJO que dice la norma que crea la sede electr&oacute;nica, no la sede electr&oacute;nica en s&iacute;.";
 preguntaids[35] = 499


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[36]= "37)  La recusaci&oacute;n pueden promoverla...<br/>";
 choices[36]= new Array();
 choices[36][0] = "Cualquier &oacute;rgano";
 choices[36][1] = "El interesado";
 choices[36][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[36][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[36] = 1;
 units[36] = ['8'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 551. Ley 40/2015";
 preguntaids[36] = 551


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta:<br/>";
 choices[37]= new Array();
 choices[37][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[37] = 1;
 units[37] = ['8'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 580. Ley 40/2015";
 preguntaids[37] = 580


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:<br/>";
 choices[38]= new Array();
 choices[38][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[38][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[38][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[38][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[38] = 1;
 units[38] = ['8'];
 blocks[38] = ['A2'];
 comments[38] = "Id Pregunta: 495. Ley 39/2015";
 preguntaids[38] = 495


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:<br/>";
 choices[39]= new Array();
 choices[39][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[39][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[39][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[39][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[39] = 1;
 units[39] = ['8'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 622. Ley 39/2015";
 preguntaids[39] = 622


//  Id pregunta: 481 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?<br/>";
 choices[40]= new Array();
 choices[40][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[40][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[40][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[40][3] = "En dos diarios de tirada nacional";
 answers[40] = 2;
 units[40] = ['8'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 481. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[40] = 481


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[41]= "42)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:<br/>";
 choices[41]= new Array();
 choices[41][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[41][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[41][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[41][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[41] = 2;
 units[41] = ['8'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 550. Ley 39/2015";
 preguntaids[41] = 550


//  Id pregunta: 609 Año de creación de pregunta: 2015
 questions[42]= "43)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?<br/>";
 choices[42]= new Array();
 choices[42][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[42][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[42][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[42][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[42] = 3;
 units[42] = ['8'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 609. Examen GSI A2 AGE 2014";
 preguntaids[42] = 609


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[43]= "44)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:<br/>";
 choices[43]= new Array();
 choices[43][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[43][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[43][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[43][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[43] = 3;
 units[43] = ['8'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 641. Ley 40/2015";
 preguntaids[43] = 641


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[44]= "45)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento por parte de los &oacute;rganos jer&aacute;rquicamente dependientes de las instrucciones u &oacute;rdenes de servicio de los &oacute;rganos administrativos de acuerdo a la ley 40/2015:<br/>";
 choices[44]= new Array();
 choices[44][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[44][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[44][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[44][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[44] = 0;
 units[44] = ['8'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 640. Ley 40/2015";
 preguntaids[44] = 640


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[45]= "46)  Al realizar una presentaci&oacute;n telem&aacute;tica en un registro electr&oacute;nico, el registro electr&oacute;nico recibe la documentaci&oacute;n y genera un recibo para el ciudadano. Este recibo va firmado electr&oacute;nicamente por la administraci&oacute;n mediante un certificado de:<br/>";
 choices[45]= new Array();
 choices[45][0] = "Sede Electr&oacute;nica";
 choices[45][1] = "Empleado P&uacute;blico";
 choices[45][2] = "De Componente";
 choices[45][3] = "Sello electr&oacute;nico o sello de &oacute;rgano";
 answers[45] = 3;
 units[45] = ['8'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 487. Examen SSTI A1 Xunta de Galicia 2011";
 preguntaids[45] = 487


//  Id pregunta: 664 Año de creación de pregunta: 2020
 questions[46]= "47)  La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas regula la pr&aacute;ctica de las notificaciones electr&oacute;nicas. Esta Ley establece que las notificaciones por medios electr&oacute;nicos se practicar&aacute;n mediante:<br/>";
 choices[46]= new Array();
 choices[46][0] = "Comparecencia en la sede electr&oacute;nica de la Administraci&oacute;n u Organismo, o a trav&eacute;s de la direcci&oacute;n electr&oacute;nica habilitada &uacute;nica.";
 choices[46][1] = "Comparecencia en la sede electr&oacute;nica de la Administraci&oacute;n u Organismo, a trav&eacute;s de la direcci&oacute;n electr&oacute;nica habilitada &uacute;nica o mediante ambos sistemas, seg&uacute;n disponga cada Administraci&oacute;n u Organismo.";
 choices[46][2] = "Correo electr&oacute;nico determinado al efecto por el interesado en el procedimiento.";
 choices[46][3] = "Comparecencia en la sede electr&oacute;nica de la Administraci&oacute;n u Organismo, correo electr&oacute;nico determinado al efecto por el interesado en el procedimiento.";
 answers[46] = 1;
 units[46] = ['8'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 664. Examen TIC A1 AGE 2016";
 preguntaids[46] = 664


//  Id pregunta: 545 Año de creación de pregunta: 2015
 questions[47]= "48)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:<br/>";
 choices[47]= new Array();
 choices[47][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[47][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[47][2] = "Ambas.";
 choices[47][3] = "Ninguna de las anteriores.";
 answers[47] = 2;
 units[47] = ['8'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 545. ";
 preguntaids[47] = 545


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[48]= "49)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta en relaci&oacute;n a la competencia de los &oacute;rganos de las administraciones p&uacute;blicas:<br/>";
 choices[48]= new Array();
 choices[48][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en esta u otras leyes.";
 choices[48][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en esta u otras leyes.";
 choices[48][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en esta u otras leyes.";
 choices[48][3] = "Todas son correctas.";
 answers[48] = 0;
 units[48] = ['8'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 572. Ley 40/2015";
 preguntaids[48] = 572


//  Id pregunta: 673 Año de creación de pregunta: 2020
 questions[49]= "50)  Seg&uacute;n la Ley 39/2015 de 1 de octubre, de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas, el certificado acreditativo del silencio producido, se expedir&aacute; de oficio por el &oacute;rgano competente para resolver:<br/>";
 choices[49]= new Array();
 choices[49][0] = "En el plazo de cinco d&iacute;as desde que expire el plazo m&aacute;ximo para resolver el procedimiento.";
 choices[49][1] = "En el plazo de veinte d&iacute;as desde que expire el plazo m&aacute;ximo para resolver el procedimiento.";
 choices[49][2] = "En el plazo de quince d&iacute;as desde que expire el plazo m&aacute;ximo para resolver el procedimiento.";
 choices[49][3] = "En el plazo de treinta d&iacute;as desde que expire el plazo m&aacute;ximo para resolver el procedimiento.";
 answers[49] = 2;
 units[49] = ['8'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 673. Examen TSI A1 Ayuntamiento de Albacete 2016";
 preguntaids[49] = 673


//  Id pregunta: 554 Año de creación de pregunta: 2010
 questions[50]= "51)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:<br/>";
 choices[50]= new Array();
 choices[50][0] = "Red 112";
 choices[50][1] = "Red 060";
 choices[50][2] = "Red Conecta";
 choices[50][3] = "Red SARA";
 answers[50] = 1;
 units[50] = ['8'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 554. ";
 preguntaids[50] = 554


//  Id pregunta: 675 Año de creación de pregunta: 2020
 questions[51]= "52)  Seg&uacute;n la Ley de Procedimiento Administrativo Com&uacute;n, &iquest;c&oacute;mo se puede ampliar el plazo de un proceso administrativo?<br/>";
 choices[51]= new Array();
 choices[51][0] = "En ning&uacute;n caso se puede ampliar porque siempre se establecen plazos lo suficientemente amplios.";
 choices[51][1] = "Se puede ampliar si las circunstancias lo aconsejan y con ello no se perjudican derechos de tercero. En ning&uacute;n caso podr&aacute; ser objeto de ampliaci&oacute;n un plazo ya vencido.";
 choices[51][2] = "Se puede ampliar si las circunstancias lo aconsejan y con ello no se perjudican derechos de tercero. En determinadas circunstancias podr&aacute; ser objeto de ampliaci&oacute;n un plazo ya vencido.";
 choices[51][3] = "Todas son incorrectas.";
 answers[51] = 1;
 units[51] = ['8'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 675. Examen TFSTI A1 Gobierno de Canarias 2018";
 preguntaids[51] = 675


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[52]= "53)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):<br/>";
 choices[52]= new Array();
 choices[52][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[52][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[52][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[52][3] = "todas son correctas";
 answers[52] = 1;
 units[52] = ['8'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 599. Ley 40/2015";
 preguntaids[52] = 599


//  Id pregunta: 618 Año de creación de pregunta: 2015
 questions[53]= "54)  Seg&uacute;n la Ley 39/2015 son interesados:<br/>";
 choices[53]= new Array();
 choices[53][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[53][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[53][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[53][3] = "Todas las anteriores.";
 answers[53] = 3;
 units[53] = ['8'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 618. ";
 preguntaids[53] = 618


//  Id pregunta: 649 Año de creación de pregunta: 2020
 questions[54]= "55)  Con efectos de 4 de septiembre de 2018, se&nbsp;modifica la D.F. 7&ordf;, de la Ley 39/2015, de 1 de octubre, retrasando las aplicaci&oacute;n de las previsiones en materia&nbsp;registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico del 2 de octubre de 2018 al&nbsp;2 de octubre de 2020. Esto se llev&oacute; a cabo a trav&eacute;s del:<br/>";
 choices[54]= new Array();
 choices[54][0] = "Real Decreto 11/2018";
 choices[54][1] = "Real Decreto-ley 12/2018";
 choices[54][2] = "Real Decreto-ley 11/2018";
 choices[54][3] = "Real Decreto 12/2018";
 answers[54] = 2;
 units[54] = ['8'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 649. ";
 preguntaids[54] = 649


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[55]= "56)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:<br/>";
 choices[55]= new Array();
 choices[55][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[55][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[55][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[55][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[55] = 1;
 units[55] = ['8'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 593. Examen TIC A1 Servicio Canario Salud 2012";
 preguntaids[55] = 593


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[56]= "57)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:<br/>";
 choices[56]= new Array();
 choices[56][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[56][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[56][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[56][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[56] = 0;
 units[56] = ['8'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 498. Ley 39/2015";
 preguntaids[56] = 498


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[57]= "58)  La Comisi&oacute;n Sectorial de Administraci&oacute;n Electr&oacute;nica:<br/>";
 choices[57]= new Array();
 choices[57][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[57][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[57][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[57][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[57] = 2;
 units[57] = ['8'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 527. Examen TIC A1 AGE 2011";
 preguntaids[57] = 527


//  Id pregunta: 539 Año de creación de pregunta: 2015
 questions[58]= "59)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:<br/>";
 choices[58]= new Array();
 choices[58][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[58][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[58][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[58][3] = "Todas las anteriores.";
 answers[58] = 3;
 units[58] = ['8'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 539. ";
 preguntaids[58] = 539


//  Id pregunta: 526 Año de creación de pregunta: 2015
 questions[59]= "60)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:<br/>";
 choices[59]= new Array();
 choices[59][0] = "January de 2013.";
 choices[59][1] = "June de 2013.";
 choices[59][2] = "December de 2013.";
 choices[59][3] = "January de 2014.";
 answers[59] = 1;
 units[59] = ['8'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 526. ";
 preguntaids[59] = 526


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[60]= "61)  Las Universidades p&uacute;blicas se regir&aacute;n por:<br/>";
 choices[60]= new Array();
 choices[60][0] = "las previsiones de la ley 40/2015 y supletoriamente por su normativa espec&iacute;fica";
 choices[60][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la ley 40/2015";
 choices[60][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[60][3] = "exclusivamente por las previsiones de la ley 40/2015";
 answers[60] = 1;
 units[60] = ['8'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 570. Ley 40/2015";
 preguntaids[60] = 570


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[61]= "62)  La ley 39/2015 se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):<br/>";
 choices[61]= new Array();
 choices[61][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[61][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[61][2] = "el sector p&uacute;blico institucional";
 choices[61][3] = "el sector privado corporativo";
 answers[61] = 3;
 units[61] = ['8'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 543. Ley 39/2015";
 preguntaids[61] = 543


//  Id pregunta: 625 Año de creación de pregunta: 2015
 questions[62]= "63)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica:<br/>";
 choices[62]= new Array();
 choices[62][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[62][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[62][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y desistir de acciones.";
 choices[62][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[62] = 1;
 units[62] = ['8'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 625. ";
 preguntaids[62] = 625


//  Id pregunta: 475 Año de creación de pregunta: 2019
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes casos puede ser objeto de delegaci&oacute;n de competencias, de acuerdo con la Ley 40/2015?<br/>";
 choices[63]= new Array();
 choices[63][0] = "La adopci&oacute;n de disposiciones de car&aacute;cter general";
 choices[63][1] = "Resoluci&oacute;n de procedimientos de car&aacute;cter sancionador";
 choices[63][2] = "Resoluci&oacute;n de recursos en los &oacute;rganos administrativos que hayan dictado los actos objeto de recurso";
 choices[63][3] = "Asuntos que se refieran a relaciones con las Cortes Generales";
 answers[63] = 1;
 units[63] = ['8'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 475. ";
 preguntaids[63] = 475


//  Id pregunta: 651 Año de creación de pregunta: 2020
 questions[64]= "65)  De acuerdo con la normativa vigente:<br/>";
 choices[64]= new Array();
 choices[64][0] = "Son anulables los actos que se dicten por &oacute;rganos manifiestamente incompetentes por raz&oacute;n de la materia o del territorio.";
 choices[64][1] = "Son nulas las disposiciones administrativas que vulneren la Constituci&oacute;n Espa&ntilde;ola de 1978 o las leyes.";
 choices[64][2] = "El art&iacute;culo 9 de la Constituci&oacute;n Espa&ntilde;ola de 1978 establece la irretroactividad de las disposiciones reconocedoras de derechos individuales.";
 choices[64][3] = "El art&iacute;culo 9 de la Constituci&oacute;n Espa&ntilde;ola de 1978 establece la irretroactividad de las disposiciones sancionadoras favorables.";
 answers[64] = 1;
 units[64] = ['8'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 651. Examen TIC A1 AGE 2018";
 preguntaids[64] = 651


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[65]= "66)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):<br/>";
 choices[65]= new Array();
 choices[65][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[65][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[65][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[65][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[65] = 2;
 units[65] = ['8'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 548. Ley 40/2015";
 preguntaids[65] = 548


//  Id pregunta: 615 Año de creación de pregunta: 2015
 questions[66]= "67)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:<br/>";
 choices[66]= new Array();
 choices[66][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[66][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[66][2] = "Ambas.";
 choices[66][3] = "Ninguna de las anteriores.";
 answers[66] = 2;
 units[66] = ['8'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 615. Art 21, Ley 39/2015";
 preguntaids[66] = 615


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[67]= "68)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:<br/>";
 choices[67]= new Array();
 choices[67][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[67][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[67][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[67][3] = "todas son correctas";
 answers[67] = 3;
 units[67] = ['8'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 600. Ley 39/2015";
 preguntaids[67] = 600


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[68]= "69)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:<br/>";
 choices[68]= new Array();
 choices[68][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[68][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[68][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[68][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[68] = 3;
 units[68] = ['8'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 533. Examen TIC A1 AGE 2015";
 preguntaids[68] = 533


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[69]= "70)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:<br/>";
 choices[69]= new Array();
 choices[69][0] = "un art&iacute;culo";
 choices[69][1] = "dos art&iacute;culos";
 choices[69][2] = "tres art&iacute;culos";
 choices[69][3] = "cuatro art&iacute;culos";
 answers[69] = 1;
 units[69] = ['8'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 510. Ley 39/2015";
 preguntaids[69] = 510


//  Id pregunta: 568 Año de creación de pregunta: 2019
 questions[70]= "71)  Las medidas provisionales que se pueden establecer antes del inicio del procedimiento, deber&aacute;n ser confirmadas, modificadas o levantadas en el acuerdo de iniciaci&oacute;n del procedimiento, que deber&aacute; efectuarse:<br/>";
 choices[70]= new Array();
 choices[70][0] = "Dentro de los cinco d&iacute;as siguientes a su adopci&oacute;n";
 choices[70][1] = "Dentro de los quince d&iacute;as siguientes a su adopci&oacute;n";
 choices[70][2] = "Dentro de los diez d&iacute;as siguientes a su adopci&oacute;n";
 choices[70][3] = "Dentro de los veinte d&iacute;as siguientes a su adopci&oacute;n";
 answers[70] = 1;
 units[70] = ['8'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 568. Art. 56 Ley 39/2015";
 preguntaids[70] = 568


//  Id pregunta: 617 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos:<br/>";
 choices[71]= new Array();
 choices[71][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[71][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[71][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[71][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[71] = 1;
 units[71] = ['8'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 617. Reglamentariamente, las Administraciones podr&aacute;n establecer la obligaci&oacute;n de relacionarse con ellas a trav&eacute;s de medios electr&oacute;nicos para determinados procedimientos y para ciertos colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica, t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos quede acreditado que tienen acceso y disponibilidad de los medios electr&oacute;nicos necesarios.";
 preguntaids[71] = 617


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:<br/>";
 choices[72]= new Array();
 choices[72][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[72][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[72][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[72][3] = "Todas son correctas.";
 answers[72] = 3;
 units[72] = ['8'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 577. Ley 40/2015";
 preguntaids[72] = 577


//  Id pregunta: 517 Año de creación de pregunta: 2015
 questions[73]= "74)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas:<br/>";
 choices[73]= new Array();
 choices[73][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[73][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[73][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[73][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[73] = 3;
 units[73] = ['8'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 517. ";
 preguntaids[73] = 517


//  Id pregunta: 478 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?<br/>";
 choices[74]= new Array();
 choices[74][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[74][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[74][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[74][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[74] = 3;
 units[74] = ['8'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 478. Art&iacute;culo 6 RD 1671/2009";
 preguntaids[74] = 478


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[75]= "76)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:<br/>";
 choices[75]= new Array();
 choices[75][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[75][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[75][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[75][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[75] = 1;
 units[75] = ['8'];
 blocks[75] = ['A2'];
 comments[75] = "Id Pregunta: 597. Ley 39/2015";
 preguntaids[75] = 597


