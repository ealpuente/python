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
//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[0]= "1)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:<br/>";
 choices[0]= new Array();
 choices[0][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[0][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[0][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[0][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[0] = 2;
 units[0] = ['1'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 70. Constituci&oacute;n de 1978";
 preguntaids[0] = 70


//  Id pregunta: 129 Año de creación de pregunta: 2020
 questions[1]= "2)  Las dos C&aacute;maras que configuran las Cortes Generales:<br/>";
 choices[1]= new Array();
 choices[1][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[1][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[1][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[1][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[1] = 2;
 units[1] = ['1'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 129. Examen TIC A1 AGE 2018 (extraordinario)";
 preguntaids[1] = 129


//  Id pregunta: 52 Año de creación de pregunta: 2019
 questions[2]= "3)  El Tribunal de Cuentas es el:<br/>";
 choices[2]= new Array();
 choices[2][0] = "Supremo &oacute;rgano fiscalizador de las cuentas y de la gesti&oacute;n econ&oacute;mica de Estado, as&iacute; como del sector p&uacute;blico. Se relaciona con las Cortes Generales a trav&eacute;s del Consejo General del Poder Judicial, en el que se integra, y del que recibe el mandato para ejercer sus funciones relativas al examen y comprobaci&oacute;n de la Cuenta General del Estado.";
 choices[2][1] = "Supremo &oacute;rgano que ejerce la intervenci&oacute;n previa de los gastos del Estado y de las Comunidades Aut&oacute;nomas. Depende directamente de las Cortes Generales y ejerce sus funciones por delegaci&oacute;n de ellas en el examen y comprobaci&oacute;n de la Cuenta General del Estado.";
 choices[2][2] = "Supremo &oacute;rgano fiscalizador de las cuentas y de la gesti&oacute;n econ&oacute;mica de Estado, as&iacute; como del sector p&uacute;blico. Depende directamente de las Cortes Generales y ejerce sus funciones por delegaci&oacute;n de ellas en el examen y comprobaci&oacute;n de la Cuenta General del Estado.";
 choices[2][3] = "Supremo &oacute;rgano fiscalizador de las cuentas y de la gesti&oacute;n econ&oacute;mica de Estado, as&iacute; como del sector p&uacute;blico. Depende org&aacute;nicamente de las Cortes Generales y funcionalmente del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica, ejerciendo sus funciones por delegaci&oacute;n de este &uacute;ltimo en el examen y comprobaci&oacute;n de la Cuenta General del Estado.";
 answers[2] = 2;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 52. Examen TIC A1 AGE 2017";
 preguntaids[2] = 52


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[3]= "4)  De conformidad con el art&iacute;culo 62 de la Constituci&oacute;n Espa&ntilde;ola, corresponde al Rey:<br/>";
 choices[3]= new Array();
 choices[3][0] = "Convocar y disolver las Cortes Generales y convocar elecciones en los t&eacute;rminos previstos en la Constituci&oacute;n.";
 choices[3][1] = "Sancionar y promulgar las leyes y ordenar la publicaci&oacute;n de las &Oacute;rdenes Ministeriales.";
 choices[3][2] = "El mando supremo de los Cuerpos y Fuerzas de Seguridad del Estado.";
 choices[3][3] = "Ejercer el derecho de gracia de acuerdo con los Tratados Internacionales.";
 answers[3] = 0;
 units[3] = ['1'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 29. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[3] = 29


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[4]= "5)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest;cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?<br/>";
 choices[4]= new Array();
 choices[4][0] = "El derecho a la propiedad privada.";
 choices[4][1] = "El derecho de asociaci&oacute;n.";
 choices[4][2] = "El derecho de fundaci&oacute;n.";
 choices[4][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[4] = 1;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 32. Constituci&oacute;n de 1978";
 preguntaids[4] = 32


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?<br/>";
 choices[5]= new Array();
 choices[5][0] = "No, en ning&uacute;n caso.";
 choices[5][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[5][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[5][3] = "Si, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[5] = 3;
 units[5] = ['1'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 14. Constituci&oacute;n de 1978";
 preguntaids[5] = 14


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:<br/>";
 choices[6]= new Array();
 choices[6][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[6][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[6][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[6][3] = "Sancionar y publicar las leyes.";
 answers[6] = 2;
 units[6] = ['1'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 106. Examen GSI A2 AGE 2013";
 preguntaids[6] = 106


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; T&iacute;tulo regula la Econom&iacute;a y la Hacienda en la Constituci&oacute;n Espa&ntilde;ola vigente en la actualidad?<br/>";
 choices[7]= new Array();
 choices[7][0] = "El T&iacute;tulo IV.";
 choices[7][1] = "El T&iacute;tulo V.";
 choices[7][2] = "El T&iacute;tulo VI.";
 choices[7][3] = "El T&iacute;tulo VII.";
 answers[7] = 3;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 18. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[7] = 18


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:<br/>";
 choices[8]= new Array();
 choices[8][0] = "El estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[8][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[8][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[8][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[8] = 0;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 113. Constituci&oacute;n de 1978";
 preguntaids[8] = 113


//  Id pregunta: 5 Año de creación de pregunta: 2019
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes derechos NO es un derecho fundamental?<br/>";
 choices[9]= new Array();
 choices[9][0] = "El secreto de las comunicaciones";
 choices[9][1] = "La propiedad privada";
 choices[9][2] = "El derecho a participar en los asuntos p&uacute;blicos";
 choices[9][3] = "La huelga";
 answers[9] = 1;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 5. Examen TIC A1 AGE 2017";
 preguntaids[9] = 5


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[10]= "11)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:<br/>";
 choices[10]= new Array();
 choices[10][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[10][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[10][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[10][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[10] = 2;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 21. Constituci&oacute;n de 1978";
 preguntaids[10] = 21


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[11]= "12)  El d&iacute;a 29 de diciembre del a&ntilde;o 1978, la Constituci&oacute;n Espa&ntilde;ola fue:<br/>";
 choices[11]= new Array();
 choices[11][0] = "Sancionada y promulgada por el Rey.";
 choices[11][1] = "Aprobada por los Plenos del Congreso y el Senado.";
 choices[11][2] = "Ratificada mediante refer&eacute;ndum por el pueblo espa&ntilde;ol.";
 choices[11][3] = "Ninguna es correcta.";
 answers[11] = 3;
 units[11] = ['1'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 42. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[11] = 42


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[12]= "13)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:<br/>";
 choices[12]= new Array();
 choices[12][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[12][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[12][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[12][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[12] = 3;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 76. Constituci&oacute;n de 1978";
 preguntaids[12] = 76


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[13]= "14)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:<br/>";
 choices[13]= new Array();
 choices[13][0] = "Ley Org&aacute;nica.";
 choices[13][1] = "Ley de Bases.";
 choices[13][2] = "Ley ordinaria.";
 choices[13][3] = "Mandato.";
 answers[13] = 1;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 27. Constituci&oacute;n de 1978";
 preguntaids[13] = 27


//  Id pregunta: 132 Año de creación de pregunta: 2020
 questions[14]= "15)  NO es una funci&oacute;n del Rey:<br/>";
 choices[14]= new Array();
 choices[14][0] = "Nombrar y separar a los miembros del Gobierno a propuesta de su Presidente.";
 choices[14][1] = "Sancionar y promulgar las leyes.";
 choices[14][2] = "Dictar normas con rango de ley.";
 choices[14][3] = "Convocar a refer&eacute;ndum.";
 answers[14] = 2;
 units[14] = ['1'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 132. Examen TIC A1 AGE 2018 (extraordinario)";
 preguntaids[14] = 132


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:<br/>";
 choices[15]= new Array();
 choices[15][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[15][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[15][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[15][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[15] = 1;
 units[15] = ['1'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 103. Constituci&oacute;n de 1978";
 preguntaids[15] = 103


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[16]= "17)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:<br/>";
 choices[16]= new Array();
 choices[16][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[16][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[16][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[16][3] = "Ser&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[16] = 2;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 83. Constituci&oacute;n de 1978";
 preguntaids[16] = 83


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?<br/>";
 choices[17]= new Array();
 choices[17][0] = "117.5";
 choices[17][1] = "117.1";
 choices[17][2] = "116";
 choices[17][3] = "15";
 answers[17] = 0;
 units[17] = ['1'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 13. Constituci&oacute;n de 1978";
 preguntaids[17] = 13


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[18]= "19)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:<br/>";
 choices[18]= new Array();
 choices[18][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[18][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[18][2] = "Al Congreso de los Diputados.";
 choices[18][3] = "Al Gobierno.";
 answers[18] = 3;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 30. Constituci&oacute;n de 1978";
 preguntaids[18] = 30


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[19]= "20)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:<br/>";
 choices[19]= new Array();
 choices[19][0] = "El Segundo.";
 choices[19][1] = "El Primero.";
 choices[19][2] = "El Preliminar.";
 choices[19][3] = "El Tercero.";
 answers[19] = 2;
 units[19] = ['1'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 46. Constituci&oacute;n de 1978";
 preguntaids[19] = 46


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?<br/>";
 choices[20]= new Array();
 choices[20][0] = "Art&iacute;culo 70.";
 choices[20][1] = "Art&iacute;culo 54.";
 choices[20][2] = "Articulo 62.";
 choices[20][3] = "Articulo 55.";
 answers[20] = 1;
 units[20] = ['1'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 11. Examen GSI A2 AGE 2013";
 preguntaids[20] = 11


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[21]= "22)  De conformidad con el art&iacute;culo 59 de la Constituci&oacute;n Espa&ntilde;ola, si no hubiere ninguna persona a quien corresponda la Regencia, &eacute;sta ser&aacute; nombrada por las Cortes Generales, y se compondr&aacute;:<br/>";
 choices[21]= new Array();
 choices[21][0] = "De una persona.";
 choices[21][1] = "De tres personas.";
 choices[21][2] = "De cinco personas.";
 choices[21][3] = "De una, tres o cinco personas.";
 answers[21] = 3;
 units[21] = ['1'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 28. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[21] = 28


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[22]= "23)  Corresponde aprobar la Ley de Presupuestos Generales del Estado a:<br/>";
 choices[22]= new Array();
 choices[22][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[22][1] = "El Congreso de los Diputados.";
 choices[22][2] = "Las Cortes Generales.";
 choices[22][3] = "El Consejo de Ministros.";
 answers[22] = 2;
 units[22] = ['1'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 23. Constituci&oacute;n de 1978";
 preguntaids[22] = 23


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:<br/>";
 choices[23]= new Array();
 choices[23][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[23][1] = "Solamente el Congreso.";
 choices[23][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[23][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[23] = 0;
 units[23] = ['1'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 89. Constituci&oacute;n de 1978";
 preguntaids[23] = 89


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?<br/>";
 choices[24]= new Array();
 choices[24][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[24][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[24][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[24][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[24] = 0;
 units[24] = ['1'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 8. Constituci&oacute;n de 1978";
 preguntaids[24] = 8


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[25]= "26)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:<br/>";
 choices[25]= new Array();
 choices[25][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[25][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[25][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[25][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[25] = 2;
 units[25] = ['1'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 37. Constituci&oacute;n de 1978";
 preguntaids[25] = 37


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[26]= "27)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:<br/>";
 choices[26]= new Array();
 choices[26][0] = "Municipios, provincias y CCAA.";
 choices[26][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[26][2] = "En CCAA, 50 provincias y municipios.";
 choices[26][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[26] = 0;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 34. Constituci&oacute;n de 1978";
 preguntaids[26] = 34


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes NO es causa de inelegibilidad para los Diputados y Senadores seg&uacute;n el art&iacute;culo 70 de la Constituci&oacute;n Espa&ntilde;ola?<br/>";
 choices[27]= new Array();
 choices[27][0] = "Ser miembros del Tribunal Constitucional.";
 choices[27][1] = "Ser miembros del Gobierno.";
 choices[27][2] = "Ser Magistrado, Juez y Fiscal en activo.";
 choices[27][3] = "Ser el Defensor del Pueblo.";
 answers[27] = 1;
 units[27] = ['1'];
 blocks[27] = ['A1'];
 comments[27] = "Id Pregunta: 2. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[27] = 2


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?<br/>";
 choices[28]= new Array();
 choices[28][0] = "De los derechos y deberes fundamentales.";
 choices[28][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[28][2] = "Derechos y libertades.";
 choices[28][3] = "De la Corona.";
 answers[28] = 0;
 units[28] = ['1'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 1. Constituci&oacute;n de 1978";
 preguntaids[28] = 1


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:<br/>";
 choices[29]= new Array();
 choices[29][0] = "Cinco.";
 choices[29][1] = "Dos.";
 choices[29][2] = "Cuatro.";
 choices[29][3] = "Siete.";
 answers[29] = 0;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 93. Constituci&oacute;n de 1978";
 preguntaids[29] = 93


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:<br/>";
 choices[30]= new Array();
 choices[30][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[30][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[30][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[30][3] = "El Senado se compone de 350 senadores.";
 answers[30] = 0;
 units[30] = ['1'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 114. Constituci&oacute;n de 1978";
 preguntaids[30] = 114


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el art&iacute;culo 30 de la Constituci&oacute;n Espa&ntilde;ola, los deberes de los ciudadanos en los casos de grave riesgo, cat&aacute;strofe o calamidad p&uacute;blica, podr&aacute;n regularse:<br/>";
 choices[31]= new Array();
 choices[31][0] = "Por Ley Org&aacute;nica.";
 choices[31][1] = "Por Ley.";
 choices[31][2] = "Por Real Decreto-Ley.";
 choices[31][3] = "Ninguna es correcta.";
 answers[31] = 1;
 units[31] = ['1'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 91. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[31] = 91


//  Id pregunta: 130 Año de creación de pregunta: 2020
 questions[32]= "33)  Las elecciones al Congreso de los Diputados tendr&aacute;n lugar:<br/>";
 choices[32]= new Array();
 choices[32][0] = "Entre los treinta y sesenta d&iacute;as desde la terminaci&oacute;n del mandato y el Congreso electo deber&aacute; ser convocado dentro de los veinticinco d&iacute;as siguientes a la celebraci&oacute;n de las elecciones.";
 choices[32][1] = "Entre los cuarenta y sesenta d&iacute;as desde la terminaci&oacute;n del mandato y el Congreso electo deber&aacute; ser convocado dentro de los treinta d&iacute;as siguientes a la celebraci&oacute;n de las elecciones.";
 choices[32][2] = "Entre los treinta y sesenta d&iacute;as desde la terminaci&oacute;n del mandato y el Congreso electo deber&aacute; ser convocado dentro de los treinta d&iacute;as siguientes a la celebraci&oacute;n de las elecciones.";
 choices[32][3] = "Entre los cuarenta y sesenta d&iacute;as desde la terminaci&oacute;n del mandato y el Congreso electo deber&aacute; ser convocado dentro de los veinticinco d&iacute;as siguientes a la celebraci&oacute;n de las elecciones.";
 answers[32] = 0;
 units[32] = ['1'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 130. Examen TSI A1 Ayuntamiento de Albacete 2016";
 preguntaids[32] = 130


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[33]= "34)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:<br/>";
 choices[33]= new Array();
 choices[33][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[33][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[33][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[33][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[33] = 1;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 49. Constituci&oacute;n de 1978";
 preguntaids[33] = 49


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n el art. 9.2 de la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[34]= new Array();
 choices[34][0] = "Corresponde a la Administraci&oacute;n General del Estado promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[34][1] = "Corresponde al gobierno central promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[34][2] = "Corresponde a los poderes p&uacute;blicos promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[34][3] = "Corresponde las Cortes Generales promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 answers[34] = 2;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 87. Examen SSTI A1 Xunta de Galicia 2011";
 preguntaids[34] = 87


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[35]= "36)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:<br/>";
 choices[35]= new Array();
 choices[35][0] = "Decretos Legislativos.";
 choices[35][1] = "Decretos-leyes.";
 choices[35][2] = "Leyes de bases.";
 choices[35][3] = "Reales Decretos del Consejo de Ministros.";
 answers[35] = 0;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 79. Constituci&oacute;n de 1978";
 preguntaids[35] = 79


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes principios NO se garantiza en el art&iacute;culo 9.3 de la Constituci&oacute;n Espa&ntilde;ola de 1978?<br/>";
 choices[36]= new Array();
 choices[36][0] = "Jerarqu&iacute;a normativa.";
 choices[36][1] = "Seguridad jur&iacute;dica.";
 choices[36][2] = "Responsabilidad y la interdicci&oacute;n de la arbitrariedad de los poderes p&uacute;blicos.";
 choices[36][3] = "Irretroactividad de las disposiciones sancionadoras favorables o restrictivas de derechos individuales.";
 answers[36] = 3;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 7. Constituci&oacute;n de 1978";
 preguntaids[36] = 7


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:<br/>";
 choices[37]= new Array();
 choices[37][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[37][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[37][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[37][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[37] = 1;
 units[37] = ['1'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 25. Constituci&oacute;n de 1978";
 preguntaids[37] = 25


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:<br/>";
 choices[38]= new Array();
 choices[38][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[38][1] = "La delimitaci&oacute;n de su territorio.";
 choices[38][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[38][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[38] = 2;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 58. Constituci&oacute;n de 1978";
 preguntaids[38] = 58


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[39]= "40)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:<br/>";
 choices[39]= new Array();
 choices[39][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[39][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[39][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[39][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[39] = 2;
 units[39] = ['1'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 65. Constituci&oacute;n de 1978";
 preguntaids[39] = 65


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[40]= "41)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:<br/>";
 choices[40]= new Array();
 choices[40][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[40][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[40][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[40][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[40] = 0;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 57. Constituci&oacute;n de 1978";
 preguntaids[40] = 57


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[41]= "42)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:<br/>";
 choices[41]= new Array();
 choices[41][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[41][1] = "La libertad sexual y religiosa.";
 choices[41][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[41][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[41] = 0;
 units[41] = ['1'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 36. Constituci&oacute;n de 1978";
 preguntaids[41] = 36


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[42]= "43)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:<br/>";
 choices[42]= new Array();
 choices[42][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[42][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[42][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[42][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[42] = 2;
 units[42] = ['1'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 48. Constituci&oacute;n de 1978";
 preguntaids[42] = 48


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[43]= "44)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:<br/>";
 choices[43]= new Array();
 choices[43][0] = "El Delegado del Gobierno.";
 choices[43][1] = "El Subdelegado del Gobierno.";
 choices[43][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[43][3] = "El Gobernador Civil.";
 answers[43] = 2;
 units[43] = ['1'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 73. Constituci&oacute;n de 1978";
 preguntaids[43] = 73


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[44]= "45)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:<br/>";
 choices[44]= new Array();
 choices[44][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[44][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[44][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[44][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[44] = 2;
 units[44] = ['1'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 45. Constituci&oacute;n de 1978";
 preguntaids[44] = 45


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:<br/>";
 choices[45]= new Array();
 choices[45][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[45][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[45][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[45][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[45] = 0;
 units[45] = ['1'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 95. Constituci&oacute;n de 1978";
 preguntaids[45] = 95


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:<br/>";
 choices[46]= new Array();
 choices[46][0] = "Publicidad.";
 choices[46][1] = "Constituci&oacute;n.";
 choices[46][2] = "Legalidad.";
 choices[46][3] = "Creaci&oacute;n.";
 answers[46] = 0;
 units[46] = ['1'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 100. Constituci&oacute;n de 1978";
 preguntaids[46] = 100


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:<br/>";
 choices[47]= new Array();
 choices[47][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[47][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[47][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[47][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[47] = 0;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 85. Constituci&oacute;n de 1978";
 preguntaids[47] = 85


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[48]= "49)  La secci&oacute;n segunda, del cap&iacute;tulo segundo, del t&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola de 1978, se denomina:<br/>";
 choices[48]= new Array();
 choices[48][0] = "De los derechos fundamentales y de las libertades p&uacute;blicas.";
 choices[48][1] = "De los derechos y deberes fundamentales.";
 choices[48][2] = "De los derechos y libertades de los ciudadanos.";
 choices[48][3] = "De los derechos y deberes de los ciudadanos.";
 answers[48] = 3;
 units[48] = ['1'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 74. Constituci&oacute;n de 1978";
 preguntaids[48] = 74


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[49]= "50)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:<br/>";
 choices[49]= new Array();
 choices[49][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[49][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[49][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como proporciones de ley.";
 choices[49][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[49] = 0;
 units[49] = ['1'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 39. Constituci&oacute;n de 1978";
 preguntaids[49] = 39


//  Id pregunta: 77 Año de creación de pregunta: 2019
 questions[50]= "51)  Las Cortes Generales:<br/>";
 choices[50]= new Array();
 choices[50][0] = "Representan al pueblo espa&ntilde;ol y est&aacute;n formadas por el Congreso de los Diputados y el Senado.";
 choices[50][1] = "Ejercen la funci&oacute;n ejecutiva y tienen las dem&aacute;s competencias que les atribuya la Constituci&oacute;n.";
 choices[50][2] = "Sus miembros podr&aacute;n serlo simult&aacute;neamente de las dos C&aacute;maras.";
 choices[50][3] = "Las respuestas a y b son correctas.";
 answers[50] = 0;
 units[50] = ['1'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 77. Examen TIC A1 AGE 2017";
 preguntaids[50] = 77


//  Id pregunta: 136 Año de creación de pregunta: 2020
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l de las siguientes alternativas es la correcta, en relaci&oacute;n al Gobierno y la Administraci&oacute;n, al que dedica la Constituci&oacute;n su T&iacute;tulo IV:<br/>";
 choices[51]= new Array();
 choices[51][0] = "El Gobierno cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de la confianza parlamentaria previstos en la Constituci&oacute;n, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[51][1] = "La responsabilidad criminal del Presidente y los dem&aacute;s miembros del Gobierno ser&aacute; exigible, en su caso, ante el Tribunal Constitucional.";
 choices[51][2] = "Los Ministros, corno miembros del Gobierno ser&aacute;n nombrados y separados por el Presidente del Gobierno a propuesta del Rey.";
 choices[51][3] = "Si transcurrido el plazo de cuatro meses, a partir de la primera votaci&oacute;n de investidura del Presidente del Gobierno, ning&uacute;n candidato hubiere obtenido la confianza del Congreso, el Presidente del Congreso disolver&aacute; ambas C&aacute;maras y convocar&aacute; nuevas elecciones con el refrendo del Presidente del Senado.";
 answers[51] = 0;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 136. Examen TSI A1 Ayuntamiento de Albacete 2016";
 preguntaids[51] = 136


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el art&iacute;culo 81 de la Constituci&oacute;n Espa&ntilde;ola &iquest;qu&eacute; mayor&iacute;a del Congreso ser&aacute; necesaria para la aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas en una votaci&oacute;n final sobre el conjunto del proyecto?<br/>";
 choices[52]= new Array();
 choices[52][0] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a simple.";
 choices[52][1] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a ordinaria.";
 choices[52][2] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a cualificada.";
 choices[52][3] = "Las leyes org&aacute;nicas exigir&aacute;n mayor&iacute;a absoluta.";
 answers[52] = 3;
 units[52] = ['1'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 96. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[52] = 96


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[53]= "54)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:<br/>";
 choices[53]= new Array();
 choices[53][0] = "El Jefe del Estado.";
 choices[53][1] = "El Tribunal Constitucional.";
 choices[53][2] = "El Congreso de los Diputados.";
 choices[53][3] = "Las Cortes Generales.";
 answers[53] = 2;
 units[53] = ['1'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 33. Constituci&oacute;n de 1978";
 preguntaids[53] = 33


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes NO es una potestad de las Cortes Generales declarada en el art&iacute;culo 66 de la Constituci&oacute;n Espa&ntilde;ola?<br/>";
 choices[54]= new Array();
 choices[54][0] = "La potestad legislativa del Estado.";
 choices[54][1] = "Aprobar sus Presupuestos.";
 choices[54][2] = "La potestad reglamentaria del Estado.";
 choices[54][3] = "Controlar la acci&oacute;n del Gobierno.";
 answers[54] = 2;
 units[54] = ['1'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 4. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[54] = 4


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[55]= "56)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:<br/>";
 choices[55]= new Array();
 choices[55][0] = "Establecer tributos.";
 choices[55][1] = "Desarrollar lo establecido en una Ley.";
 choices[55][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[55][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[55] = 0;
 units[55] = ['1'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[55] = 82


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:<br/>";
 choices[56]= new Array();
 choices[56][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[56][1] = "Por Orden Ministerial.";
 choices[56][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[56][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[56] = 0;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 108. Constituci&oacute;n de 1978";
 preguntaids[56] = 108


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:<br/>";
 choices[57]= new Array();
 choices[57][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[57][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[57][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[57][3] = "A las Diputaciones y a las Comarcas.";
 answers[57] = 0;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 26. Constituci&oacute;n de 1978";
 preguntaids[57] = 26


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[58]= "59)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:<br/>";
 choices[58]= new Array();
 choices[58][0] = "El Gobierno.";
 choices[58][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[58][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[58][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[58] = 2;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 59. Constituci&oacute;n de 1978";
 preguntaids[58] = 59


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?<br/>";
 choices[59]= new Array();
 choices[59][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[59][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[59][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[59][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[59] = 0;
 units[59] = ['1'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 16. Constituci&oacute;n de 1978";
 preguntaids[59] = 16


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?<br/>";
 choices[60]= new Array();
 choices[60][0] = "Art&iacute;culo 16.2.";
 choices[60][1] = "Art&iacute;culo 17.1.";
 choices[60][2] = "Art&iacute;culo 18.1.";
 choices[60][3] = "Art&iacute;culo 18.2.";
 answers[60] = 2;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 12. Constituci&oacute;n de 1978";
 preguntaids[60] = 12


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[61]= "62)  El art&iacute;culo 69 de la Constituci&oacute;n Espa&ntilde;ola indica que el Senado es la C&aacute;mara de representaci&oacute;n territorial y que a cada provincia le corresponden:<br/>";
 choices[61]= new Array();
 choices[61][0] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por dos Senadores.";
 choices[61][1] = "La ley distribuir&aacute; el n&uacute;mero total de Senadores, asignando una representaci&oacute;n m&iacute;nima inicial a cada circunscripci&oacute;n y distribuyendo los dem&aacute;s en proporci&oacute;n a la poblaci&oacute;n.";
 choices[61][2] = "Dos Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 choices[61][3] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 answers[61] = 0;
 units[61] = ['1'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 38. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[61] = 38


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:<br/>";
 choices[62]= new Array();
 choices[62][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[62][1] = "Autorizar indultos generales.";
 choices[62][2] = "Sancionar las leyes.";
 choices[62][3] = "Promulgar las leyes.";
 answers[62] = 1;
 units[62] = ['1'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 112. Examen GSI A2 AGE 2015";
 preguntaids[62] = 112


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[63]= "64)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:<br/>";
 choices[63]= new Array();
 choices[63][0] = "Cuatro.";
 choices[63][1] = "Una.";
 choices[63][2] = "Cinco.";
 choices[63][3] = "Nueve.";
 answers[63] = 0;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 78. Constituci&oacute;n de 1978";
 preguntaids[63] = 78


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?<br/>";
 choices[64]= new Array();
 choices[64][0] = "Constitucional.";
 choices[64][1] = "Penal.";
 choices[64][2] = "Militar.";
 choices[64][3] = "Tribunales consuetudinarios.";
 answers[64] = 1;
 units[64] = ['1'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 3. Constituci&oacute;n de 1978";
 preguntaids[64] = 3


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[65]= "66)  Las funciones, principios b&aacute;sicos de actuaci&oacute;n y estatutos de las Fuerzas y Cuerpos de seguridad ser&aacute;n determinados, seg&uacute;n el art&iacute;culo 104 de la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[65]= new Array();
 choices[65][0] = "Por una Ley org&aacute;nica.";
 choices[65][1] = "Por un Decreto-ley.";
 choices[65][2] = "Por un Real Decreto.";
 choices[65][3] = "Por un Reglamento interno de funcionamiento.";
 answers[65] = 0;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 80. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[65] = 80


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[66]= "67)  La soberan&iacute;a nacional reside en:<br/>";
 choices[66]= new Array();
 choices[66][0] = "el Parlamento nacional.";
 choices[66][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[66][2] = "el pueblo espa&ntilde;ol.";
 choices[66][3] = "el Congreso y el Senado.";
 answers[66] = 2;
 units[66] = ['1'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 75. Constituci&oacute;n de 1978";
 preguntaids[66] = 75


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[67]= "68)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:<br/>";
 choices[67]= new Array();
 choices[67][0] = "El Rey.";
 choices[67][1] = "El Jefe del Estado.";
 choices[67][2] = "El Gobierno.";
 choices[67][3] = "El Presidente del Gobierno.";
 answers[67] = 2;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 68. Constituci&oacute;n de 1978";
 preguntaids[67] = 68


//  Id pregunta: 125 Año de creación de pregunta: 2020
 questions[68]= "69)  En el T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 se contienen los principios generales de la misma en:<br/>";
 choices[68]= new Array();
 choices[68][0] = "Los tres primeros art&iacute;culos.";
 choices[68][1] = "En los diez primeros art&iacute;culos.";
 choices[68][2] = "No est&aacute;n en el T&iacute;tulo Preliminar.";
 choices[68][3] = "En los nueve primeros art&iacute;culos.";
 answers[68] = 3;
 units[68] = ['1'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 125. Examen TSI A1 Ayuntamiento de Albacete 2016";
 preguntaids[68] = 125


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:<br/>";
 choices[69]= new Array();
 choices[69][0] = "El Presidente del Gobierno.";
 choices[69][1] = "El Consejo de Ministros.";
 choices[69][2] = "40 Diputados.";
 choices[69][3] = "El Ministerio Fiscal.";
 answers[69] = 0;
 units[69] = ['1'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 102. Constituci&oacute;n de 1978";
 preguntaids[69] = 102


//  Id pregunta: 120 Año de creación de pregunta: 2020
 questions[70]= "71)  &iquest;En qu&eacute; secci&oacute;n del Cap&iacute;tulo de Derechos y libertades de la Constituci&oacute;n Espa&ntilde;ola se enmarca el derecho a la propiedad privada y a la herencia?<br/>";
 choices[70]= new Array();
 choices[70][0] = "De los derechos fundamentales y de las libertades p&uacute;blicas.";
 choices[70][1] = "De los derechos y deberes de los ciudadanos.";
 choices[70][2] = "De los principios rectores de la pol&iacute;tica social y econ&oacute;mica.";
 choices[70][3] = "De las garant&iacute;as de las libertades y derechos fundamentales.";
 answers[70] = 1;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 120. Examen TFSTI A1 Gobierno de Canarias 2018";
 preguntaids[70] = 120


//  Id pregunta: 137 Año de creación de pregunta: 2020
 questions[71]= "72)  Sobre la Corona, seg&uacute;n la regulaci&oacute;n contenida en la Constituci&oacute;n Espa&ntilde;ola, es cierto que:<br/>";
 choices[71]= new Array();
 choices[71][0] = "La Reina consorte o el consorte de la Reina no podr&aacute;n asumir funciones constitucionales, salvo lo dispuesto para la Tutela, dice el art&iacute;culo 58.";
 choices[71][1] = "Las abdicaciones y renuncias y cualquier duda de hecho o de derecho que ocurra en el orden de sucesi&oacute;n a la Corona se resolver&aacute;n por el Congreso de los Diputados.";
 choices[71][2] = "Extinguidas todas las l&iacute;neas llamadas en Derecho, las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la Corona en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[71][3] = "Sino hubiere ninguna persona a quien coresponda la Regencia, &eacute;sta ser&aacute; nombrada por las Cortes Generales, y se compondr&aacute; de una, cinco, siete o nueve personas.";
 answers[71] = 2;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 137. Examen TSI A1 Ayuntamiento de Albacete 2016";
 preguntaids[71] = 137


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[72]= "73)  Nadie podr&aacute; ser privado de sus bienes y derechos seg&uacute;n el art&iacute;culo 33 de la Constituci&oacute;n Espa&ntilde;ola de 1978, salvo por causa justificada:<br/>";
 choices[72]= new Array();
 choices[72][0] = "De calamidad p&uacute;blica.";
 choices[72][1] = "De grave riesgo.";
 choices[72][2] = "De utilidad p&uacute;blica o inter&eacute;s social.";
 choices[72][3] = "En cualquiera de las situaciones anteriores.";
 answers[72] = 2;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 84. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[72] = 84


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:<br/>";
 choices[73]= new Array();
 choices[73][0] = "El rey, a propuesta del Gobierno.";
 choices[73][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[73][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[73][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[73] = 1;
 units[73] = ['1'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 24. Constituci&oacute;n de 1978";
 preguntaids[73] = 24


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[74]= "75)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n institucional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:<br/>";
 choices[74]= new Array();
 choices[74][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[74][1] = "Una Asamblea legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[74][2] = "Una Asamblea legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[74][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[74] = 2;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 35. Constituci&oacute;n de 1978";
 preguntaids[74] = 35


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[75]= "76)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:<br/>";
 choices[75]= new Array();
 choices[75][0] = "61";
 choices[75][1] = "53";
 choices[75][2] = "65";
 choices[75][3] = "67";
 answers[75] = 2;
 units[75] = ['1'];
 blocks[75] = ['A1'];
 comments[75] = "Id Pregunta: 47. Constituci&oacute;n de 1978";
 preguntaids[75] = 47


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[76]= "77)  Seg&uacute;n el art&iacute;culo 54 de la Constituci&oacute;n Espa&ntilde;ola una ley org&aacute;nica regular&aacute; la instituci&oacute;n del Defensor del Pueblo, como alto comisionado de las Cortes Generales, designado por &eacute;stas para la defensa de los derechos comprendidos en el T&iacute;tulo I, a cuyo efecto podr&aacute; supervisar:<br/>";
 choices[76]= new Array();
 choices[76][0] = "La actividad del Gobierno, dando cuenta a las Cortes Generales.";
 choices[76][1] = "La actividad de la Administraci&oacute;n, dando cuenta al Congreso de los Diputados.";
 choices[76][2] = "La actividad del Gobierno y de la Administraci&oacute;n, dando cuenta a las Cortes Generales.";
 choices[76][3] = "Ninguna es correcta.";
 answers[76] = 3;
 units[76] = ['1'];
 blocks[76] = ['A1'];
 comments[76] = "Id Pregunta: 92. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[76] = 92


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[77]= "78)  Todos tienen derecho a sindicarse libremente. La ley podr&aacute; limitar o exceptuar el ejercicio de este derecho, seg&uacute;n el art&iacute;culo 28 de la Constituci&oacute;n Espa&ntilde;ola de 1978:<br/>";
 choices[77]= new Array();
 choices[77][0] = "A las Fuerzas o Institutos armados.";
 choices[77][1] = "A los Cuerpos o Fuerzas armadas.";
 choices[77][2] = "A los Institutos sometidos a disciplina militar.";
 choices[77][3] = "A los funcionarios p&uacute;blicos.";
 answers[77] = 0;
 units[77] = ['1'];
 blocks[77] = ['A1'];
 comments[77] = "Id Pregunta: 118. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[77] = 118


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[78]= "79)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:<br/>";
 choices[78]= new Array();
 choices[78][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[78][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[78][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[78][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[78] = 3;
 units[78] = ['1'];
 blocks[78] = ['A1'];
 comments[78] = "Id Pregunta: 62. Constituci&oacute;n de 1978";
 preguntaids[78] = 62


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[79]= "80)  De conformidad con el art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola el Gobierno se compone:<br/>";
 choices[79]= new Array();
 choices[79][0] = "Del Presidente, de los Vicepresidentes y de los dem&aacute;s miembros que establezca la ley.";
 choices[79][1] = "Del Presidente, de los Ministros, y de los dem&aacute;s miembros que establezca la ley.";
 choices[79][2] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y de los dem&aacute;s miembros que establezca la ley.";
 choices[79][3] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y los Secretarios Generales y de los dem&aacute;s miembros que establezca la ley.";
 answers[79] = 2;
 units[79] = ['1'];
 blocks[79] = ['A1'];
 comments[79] = "Id Pregunta: 31. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[79] = 31


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[80]= "81)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?<br/>";
 choices[80]= new Array();
 choices[80][0] = "Dos Cap&iacute;tulos.";
 choices[80][1] = "Tres Cap&iacute;tulos.";
 choices[80][2] = "Un Cap&iacute;tulo.";
 choices[80][3] = "Cuatro Cap&iacute;tulos.";
 answers[80] = 1;
 units[80] = ['1'];
 blocks[80] = ['A1'];
 comments[80] = "Id Pregunta: 9. Constituci&oacute;n de 1978";
 preguntaids[80] = 9


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[81]= "82)  Los ciudadanos tienen el derecho a participar en los asuntos p&uacute;blicos, directamente o por medio de representantes, libremente elegidos en elecciones peri&oacute;dicas por sufragio universal. En relaci&oacute;n con esta frase, y seg&uacute;n lo dispuesto en el art&iacute;culo 13 de la Constituci&oacute;n Espa&ntilde;ola, indicar la afirmaci&oacute;n correcta:<br/>";
 choices[81]= new Array();
 choices[81][0] = "Solamente los espa&ntilde;oles ser&aacute;n titulares de este derecho.";
 choices[81][1] = "Solamente los espa&ntilde;oles ser&aacute;n titulares de este derecho, salvo lo que pueda establecerse por tratado o ley para el derecho de sufragio activo en las elecciones municipales.";
 choices[81][2] = "Solamente los espa&ntilde;oles ser&aacute;n titulares de este derecho, salvo lo que pueda establecerse por tratado o ley para el derecho de sufragio activo y pasivo en las elecciones municipales.";
 choices[81][3] = "Ninguna es correcta.";
 answers[81] = 2;
 units[81] = ['1'];
 blocks[81] = ['A1'];
 comments[81] = "Id Pregunta: 81. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[81] = 81


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:<br/>";
 choices[82]= new Array();
 choices[82][0] = "Ley Org&aacute;nica.";
 choices[82][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[82][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[82][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[82] = 2;
 units[82] = ['1'];
 blocks[82] = ['A1'];
 comments[82] = "Id Pregunta: 116. Examen GSI A2 AGE 2008";
 preguntaids[82] = 116


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[83]= "84)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:<br/>";
 choices[83]= new Array();
 choices[83][0] = "El Presidente del Congreso de los Diputados.";
 choices[83][1] = "El Presidente del Gobierno.";
 choices[83][2] = "El Rey.";
 choices[83][3] = "El Consejo de Ministros.";
 answers[83] = 2;
 units[83] = ['1'];
 blocks[83] = ['A1'];
 comments[83] = "Id Pregunta: 67. Constituci&oacute;n de 1978";
 preguntaids[83] = 67


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[84]= "85)  La iniciativa legislativa corresponde:<br/>";
 choices[84]= new Array();
 choices[84][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[84][1] = "Al rey y al Gobierno.";
 choices[84][2] = "Al Congreso, al Senado y al Rey.";
 choices[84][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[84] = 3;
 units[84] = ['1'];
 blocks[84] = ['A1'];
 comments[84] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[84] = 69


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[85]= "86)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:<br/>";
 choices[85]= new Array();
 choices[85][0] = "l Consejo General del Poder Judicial.";
 choices[85][1] = "El pleno de Tribunal Constitucional.";
 choices[85][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[85][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[85] = 3;
 units[85] = ['1'];
 blocks[85] = ['A1'];
 comments[85] = "Id Pregunta: 44. Constituci&oacute;n de 1978";
 preguntaids[85] = 44


//  Id pregunta: 123 Año de creación de pregunta: 2020
 questions[86]= "87)  El Consejo de Estado:<br/>";
 choices[86]= new Array();
 choices[86][0] = "Es el &oacute;rgano del Estado con relevancia constitucional siendo, seg&uacute;n el art&iacute;culo 117 del T&iacute;tulo VI de la Constituci&oacute;n Espa&ntilde;ola, supremo &oacute;rgano consultivo de la Administraci&oacute;n del Estado.";
 choices[86][1] = "Es el &oacute;rgano del Estado con relevancia constitucional y no puede ejercer funciones consultivas respecto de las Comunidades Aut&oacute;nomas.";
 choices[86][2] = "Es el &oacute;rgano del Estado con relevancia constitucional y supremo &oacute;rgano consultivo del Gobierno, y tambi&eacute;n de las Comunidades Aut&oacute;nomas, siempre que estas lo soliciten, y de forma preceptiva en los casos establecidos en la Ley Org&aacute;nica del Consejo de Estado, si las Comunidades Aut&oacute;nomas no han creado sus propios &oacute;rganos consultivos.";
 choices[86][3] = "Es el supremo &oacute;rgano consultivo del Gobierno, con autonom&iacute;a org&aacute;nica y funcional respecto del mismo, dependiente del Ministerio de la Presidencia y para las Administraciones Territoriales.";
 answers[86] = 2;
 units[86] = ['1'];
 blocks[86] = ['A1'];
 comments[86] = "Id Pregunta: 123. Examen TIC A1 AGE 2016";
 preguntaids[86] = 123


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[87]= "88)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:<br/>";
 choices[87]= new Array();
 choices[87][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[87][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[87][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[87][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[87] = 3;
 units[87] = ['1'];
 blocks[87] = ['A1'];
 comments[87] = "Id Pregunta: 64. Constituci&oacute;n de 1978";
 preguntaids[87] = 64


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[88]= "89)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:<br/>";
 choices[88]= new Array();
 choices[88][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[88][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[88][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[88][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[88] = 1;
 units[88] = ['1'];
 blocks[88] = ['A1'];
 comments[88] = "Id Pregunta: 99. Constituci&oacute;n de 1978";
 preguntaids[88] = 99


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[89]= "90)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:<br/>";
 choices[89]= new Array();
 choices[89][0] = "absoluta de las Cortes Generales.";
 choices[89][1] = "absoluta del Congreso de los Diputados.";
 choices[89][2] = "simple de las Cortes Generales.";
 choices[89][3] = "simple del Congreso de los Diputados.";
 answers[89] = 3;
 units[89] = ['1'];
 blocks[89] = ['A1'];
 comments[89] = "Id Pregunta: 107. Constituci&oacute;n de 1978";
 preguntaids[89] = 107


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[90]= "91)  El Gobierno cesa, seg&uacute;n el art&iacute;culo 101 de la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[90]= new Array();
 choices[90][0] = "Antes de la celebraci&oacute;n de elecciones generales.";
 choices[90][1] = "En los casos de p&eacute;rdida de la confianza del Congreso de los Diputados y del Gobierno de la naci&oacute;n.";
 choices[90][2] = "Por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[90][3] = "Cu&aacute;ndo se den las causas previstas en el art&iacute;culo 4 de la Constituci&oacute;n espa&ntilde;ola.";
 answers[90] = 2;
 units[90] = ['1'];
 blocks[90] = ['A1'];
 comments[90] = "Id Pregunta: 43. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[90] = 43


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[91]= "92)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:<br/>";
 choices[91]= new Array();
 choices[91][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[91][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[91][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[91][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[91] = 3;
 units[91] = ['1'];
 blocks[91] = ['A1'];
 comments[91] = "Id Pregunta: 55. Constituci&oacute;n de 1978";
 preguntaids[91] = 55


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[92]= "93)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:<br/>";
 choices[92]= new Array();
 choices[92][0] = "Por Real Decreto.";
 choices[92][1] = "Por Orden del Ministerio del Interior.";
 choices[92][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[92][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[92] = 2;
 units[92] = ['1'];
 blocks[92] = ['A1'];
 comments[92] = "Id Pregunta: 90. Constituci&oacute;n de 1978";
 preguntaids[92] = 90


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[93]= "94)  La Constituci&oacute;n Espa&ntilde;ola de 1978 se estructura en:<br/>";
 choices[93]= new Array();
 choices[93][0] = "169 art&iacute;culos, 9 disposiciones adicionales, 4 transitorias, 1 disposici&oacute;n final.";
 choices[93][1] = "167 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 choices[93][2] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 2 disposiciones finales.";
 choices[93][3] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 answers[93] = 3;
 units[93] = ['1'];
 blocks[93] = ['A1'];
 comments[93] = "Id Pregunta: 61. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[93] = 61


//  Id pregunta: 127 Año de creación de pregunta: 2020
 questions[94]= "95)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:<br/>";
 choices[94]= new Array();
 choices[94][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[94][1] = "Publicidad de las normas.";
 choices[94][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[94][3] = "Coordinaci&oacute;n normativa.";
 answers[94] = 1;
 units[94] = ['1'];
 blocks[94] = ['A1'];
 comments[94] = "Id Pregunta: 127. Examen TIC A1 AGE 2018 (extraordinario)";
 preguntaids[94] = 127


//  Id pregunta: 121 Año de creación de pregunta: 2020
 questions[95]= "96)  El art&iacute;culo 2 de la Constituci&oacute;n Espa&ntilde;ola de 1978, despu&eacute;s de declarar la indisoluble unidad de la Naci&oacute;n espa&ntilde;ola, reconoce y garantiza:<br/>";
 choices[95]= new Array();
 choices[95][0] = "El derecho a la autonom&iacute;a de las regiones y naciones que la integran.";
 choices[95][1] = "El derecho a la autonom&iacute;a de las regiones y provincias que la integran.";
 choices[95][2] = "El derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[95][3] = "Ninguna es correcta.";
 answers[95] = 2;
 units[95] = ['1'];
 blocks[95] = ['A1'];
 comments[95] = "Id Pregunta: 121. Examen TIC A1 AGE 2018 (extraordinario)";
 preguntaids[95] = 121


//  Id pregunta: 128 Año de creación de pregunta: 2020
 questions[96]= "97)  La reforma de la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[96]= new Array();
 choices[96][0] = "Siempre deber&aacute; ser sometida a refer&eacute;ndum su ratificaci&oacute;n.";
 choices[96][1] = "Puede no ser sometida a refer&eacute;ndum si se aprueba por 3/5 de cada una de las c&aacute;maras y si no se solicita dentro de los siguientes quince d&iacute;as de su aprobaci&oacute;n, por una d&eacute;cima parte de los miembros de cualquiera de las c&aacute;maras.";
 choices[96][2] = "Puede no ser sometida a refer&eacute;ndum si se aprueba por mayor&iacute;a absoluta de cada una de las c&aacute;maras y si no se solicita dentro de los siguientes quince d&iacute;as de su aprobaci&oacute;n, por una d&eacute;cima parte de los miembros de cualquiera de las c&aacute;maras.";
 choices[96][3] = "Puede no ser sometida a refer&eacute;ndum si se aprueba por 2/3 de cada una de las c&aacute;maras y si no se solicita dentro de los siguientes quince d&iacute;as de su aprobaci&oacute;n, por una d&eacute;cima parte de los miembros de cualquiera de las c&aacute;maras.";
 answers[96] = 1;
 units[96] = ['1'];
 blocks[96] = ['A1'];
 comments[96] = "Id Pregunta: 128. Examen TFSTI A1 Gobierno de Canarias 2018";
 preguntaids[96] = 128


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[97]= "98)  La Justicia, en Espa&ntilde;a, emana del/de la:<br/>";
 choices[97]= new Array();
 choices[97][0] = "Rey.";
 choices[97][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[97][2] = "Constituci&oacute;n.";
 choices[97][3] = "Pueblo.";
 answers[97] = 3;
 units[97] = ['1'];
 blocks[97] = ['A1'];
 comments[97] = "Id Pregunta: 71. Constituci&oacute;n de 1978";
 preguntaids[97] = 71


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[98]= "99)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?<br/>";
 choices[98]= new Array();
 choices[98][0] = "Una ley ordinaria.";
 choices[98][1] = "Una ley org&aacute;nica.";
 choices[98][2] = "Una ley de bases.";
 choices[98][3] = "Una ley de transferencia.";
 answers[98] = 1;
 units[98] = ['1'];
 blocks[98] = ['A1'];
 comments[98] = "Id Pregunta: 17. Constituci&oacute;n de 1978";
 preguntaids[98] = 17


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[99]= "100)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:<br/>";
 choices[99]= new Array();
 choices[99][0] = "al menos por 50 Diputados.";
 choices[99][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[99][2] = "por la Mesa del Congreso de los Diputados.";
 choices[99][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[99] = 1;
 units[99] = ['1'];
 blocks[99] = ['A1'];
 comments[99] = "Id Pregunta: 88. Constituci&oacute;n de 1978";
 preguntaids[99] = 88


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[100]= "101)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?<br/>";
 choices[100]= new Array();
 choices[100][0] = "Cuatro.";
 choices[100][1] = "Ninguno.";
 choices[100][2] = "Dos.";
 choices[100][3] = "Seis.";
 answers[100] = 2;
 units[100] = ['1'];
 blocks[100] = ['A1'];
 comments[100] = "Id Pregunta: 0. Constituci&oacute;n de 1978";
 preguntaids[100] = 0


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[101]= "102)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:<br/>";
 choices[101]= new Array();
 choices[101][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[101][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[101][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[101][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[101] = 0;
 units[101] = ['1'];
 blocks[101] = ['A1'];
 comments[101] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[101] = 97


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[102]= "103)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:<br/>";
 choices[102]= new Array();
 choices[102][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[102][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[102][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[102][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[102] = 0;
 units[102] = ['1'];
 blocks[102] = ['A1'];
 comments[102] = "Id Pregunta: 98. Constituci&oacute;n de 1978";
 preguntaids[102] = 98


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[103]= "104)  La potestad reglamentaria constitucionalmente corresponde:<br/>";
 choices[103]= new Array();
 choices[103][0] = "Al Gobierno.";
 choices[103][1] = "A las Cortes Generales.";
 choices[103][2] = "Al Poder Judicial.";
 choices[103][3] = "Al Congreso de los Diputados.";
 answers[103] = 0;
 units[103] = ['1'];
 blocks[103] = ['A1'];
 comments[103] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[103] = 72


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[104]= "105)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:<br/>";
 choices[104]= new Array();
 choices[104][0] = "las Cortes generales.";
 choices[104][1] = "los partidos pol&iacute;ticos.";
 choices[104][2] = "los sindicatos.";
 choices[104][3] = "las Comunidades Aut&oacute;nomas.";
 answers[104] = 1;
 units[104] = ['1'];
 blocks[104] = ['A1'];
 comments[104] = "Id Pregunta: 105. Constituci&oacute;n de 1978";
 preguntaids[104] = 105


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[105]= "106)  En caso de dimisi&oacute;n del Presidente del Gobierno:<br/>";
 choices[105]= new Array();
 choices[105][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[105][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[105][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[105][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[105] = 0;
 units[105] = ['1'];
 blocks[105] = ['A1'];
 comments[105] = "Id Pregunta: 53. Constituci&oacute;n de 1978";
 preguntaids[105] = 53


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[106]= "107)  La Constituci&oacute;n garantiza la irretroactividad:<br/>";
 choices[106]= new Array();
 choices[106][0] = "De las disposiciones favorables.";
 choices[106][1] = "De las disposiciones sancionadoras no favorables.";
 choices[106][2] = "De las disposiciones restrictivas de derechos individuales.";
 choices[106][3] = "Las respuestas b) y c) son correctas.";
 answers[106] = 3;
 units[106] = ['1'];
 blocks[106] = ['A1'];
 comments[106] = "Id Pregunta: 66. Constituci&oacute;n de 1978";
 preguntaids[106] = 66


//  Id pregunta: 119 Año de creación de pregunta: 2019
 questions[107]= "108)  Un refer&eacute;ndum consultivo sobre cuestiones pol&iacute;ticas de especial transcendencia:<br/>";
 choices[107]= new Array();
 choices[107][0] = "Se puede convocar a iniciativa de las Comunidades Aut&oacute;nomas en virtud del art&iacute;culo 1 de la Constituci&oacute;n espa&ntilde;ola que dice que la soberan&iacute;a nacional reside en el pueblo espa&ntilde;ol.";
 choices[107][1] = "Ser&aacute; convocado por el Rey, a propuesta del Presidente del Gobierno, previamente autorizada por el Congreso de los Diputados.";
 choices[107][2] = "Ser&aacute; convocado por el Presidente del Gobierno, a propuesta de los grupos parlamentarios con una representaci&oacute;n suficiente en el Congreso.";
 choices[107][3] = "Est&aacute; prohibido por la Constituci&oacute;n en virtud del art&iacute;culo 92.1.";
 answers[107] = 1;
 units[107] = ['1'];
 blocks[107] = ['A1'];
 comments[107] = "Id Pregunta: 119. Examen TIC A1 AGE 2017";
 preguntaids[107] = 119


//  Id pregunta: 133 Año de creación de pregunta: 2020
 questions[108]= "109)  Seg&uacute;n el art&iacute;culo 18 de la Conitituci&oacute;n Espa&ntilde;ola de 1978, el secreto de las comunicaciones:<br/>";
 choices[108]= new Array();
 choices[108][0] = "Se garantiza s&oacute;lo en las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[108][1] = "Se garantiza en todo caso.";
 choices[108][2] = "Se garantiza, salvo resoluci&oacute;n judicial.";
 choices[108][3] = "Su garant&iacute;a no constituye un derecho fundamental.";
 answers[108] = 2;
 units[108] = ['1'];
 blocks[108] = ['A1'];
 comments[108] = "Id Pregunta: 133. Examen IASIS A1 Conselleria de Sanidad de la Generalitat Valenciana 2016";
 preguntaids[108] = 133


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[109]= "110)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:<br/>";
 choices[109]= new Array();
 choices[109][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[109][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[109][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[109][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[109] = 3;
 units[109] = ['1'];
 blocks[109] = ['A1'];
 comments[109] = "Id Pregunta: 63. Constituci&oacute;n de 1978";
 preguntaids[109] = 63


//  Id pregunta: 134 Año de creación de pregunta: 2020
 questions[110]= "111)  Seg&uacute;n el art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola de 1978, los decretos-leyes:<br/>";
 choices[110]= new Array();
 choices[110][0] = "Pueden regular materia electoral general en caso de urgente necesidad.";
 choices[110][1] = "Para dictar estas normas es necesaria la delegaci&oacute;n previa de las Cortes Generales.";
 choices[110][2] = "Despu&eacute;s de ser promulgados deber&aacute;n ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[110][3] = "La potestad de dictarlos la tiene el Presidente del Gobierno.";
 answers[110] = 2;
 units[110] = ['1'];
 blocks[110] = ['A1'];
 comments[110] = "Id Pregunta: 134. Examen TIC A1 AGE 2018";
 preguntaids[110] = 134


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[111]= "112)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:<br/>";
 choices[111]= new Array();
 choices[111][0] = "Diez art&iacute;culos.";
 choices[111][1] = "Nueve art&iacute;culos.";
 choices[111][2] = "Once art&iacute;culos.";
 choices[111][3] = "Ocho art&iacute;culos.";
 answers[111] = 0;
 units[111] = ['1'];
 blocks[111] = ['A1'];
 comments[111] = "Id Pregunta: 51. Constituci&oacute;n de 1978";
 preguntaids[111] = 51


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[112]= "113)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:<br/>";
 choices[112]= new Array();
 choices[112][0] = "3 a&ntilde;os.";
 choices[112][1] = "5 a&ntilde;os.";
 choices[112][2] = "4 a&ntilde;os.";
 choices[112][3] = "6 a&ntilde;os.";
 answers[112] = 1;
 units[112] = ['1'];
 blocks[112] = ['A1'];
 comments[112] = "Id Pregunta: 41. Constituci&oacute;n de 1978";
 preguntaids[112] = 41


//  Id pregunta: 138 Año de creación de pregunta: 2020
 questions[113]= "114)  Son caracter&iacute;sticas generales de la Constituci&oacute;n Espa&ntilde;ola de 1978:<br/>";
 choices[113]= new Array();
 choices[113][0] = "De origen noble, pactada, breve, escrita y flexible.";
 choices[113][1] = "De origen popular, de consenso, escrita, flexible y nada ideol&oacute;gica.";
 choices[113][2] = "Sin ideolog&iacute;a, de origen mon&aacute;rquico, escrita y r&iacute;gida.";
 choices[113][3] = "De origen popular, de consenso, extensa y r&iacute;gida.";
 answers[113] = 3;
 units[113] = ['1'];
 blocks[113] = ['A1'];
 comments[113] = "Id Pregunta: 138. Examen TSI A1 Ayuntamiento de Albacete 2016";
 preguntaids[113] = 138


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[114]= "115)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:<br/>";
 choices[114]= new Array();
 choices[114][0] = "Los Derechos y Deberes fundamentales.";
 choices[114][1] = "La Corona.";
 choices[114][2] = "El Poder Judicial.";
 choices[114][3] = "Las Cortes Generales.";
 answers[114] = 0;
 units[114] = ['1'];
 blocks[114] = ['A1'];
 comments[114] = "Id Pregunta: 50. Constituci&oacute;n de 1978";
 preguntaids[114] = 50


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[115]= "116)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?<br/>";
 choices[115]= new Array();
 choices[115][0] = "El Presidente del Senado";
 choices[115][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[115][2] = "El Presidente del Gobierno";
 choices[115][3] = "El Presidente de las Cortes Generales";
 answers[115] = 2;
 units[115] = ['1'];
 blocks[115] = ['A1'];
 comments[115] = "Id Pregunta: 19. Constituci&oacute;n de 1978";
 preguntaids[115] = 19


//  Id pregunta: 22 Año de creación de pregunta: 2019
 questions[116]= "117)  Ante qu&eacute; &oacute;rgano se interpone el recurso de amparo:<br/>";
 choices[116]= new Array();
 choices[116][0] = "Juzgados de Primera Instancia e Instrucci&oacute;n.";
 choices[116][1] = "Ministerio Fiscal.";
 choices[116][2] = "Tribunal Constitucional.";
 choices[116][3] = "Defensor del Pueblo.";
 answers[116] = 2;
 units[116] = ['1'];
 blocks[116] = ['A1'];
 comments[116] = "Id Pregunta: 22. Examen TIC A1 AGE 2017";
 preguntaids[116] = 22


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[117]= "118)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:<br/>";
 choices[117]= new Array();
 choices[117][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[117][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[117][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[117][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[117] = 3;
 units[117] = ['1'];
 blocks[117] = ['A1'];
 comments[117] = "Id Pregunta: 115. Examen GSI A2 AGE 2008";
 preguntaids[117] = 115


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[118]= "119)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:<br/>";
 choices[118]= new Array();
 choices[118][0] = "El Presidente y su gabinete.";
 choices[118][1] = "El Presidente y sus Ministros.";
 choices[118][2] = "El Rey y el Presidente.";
 choices[118][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[118] = 3;
 units[118] = ['1'];
 blocks[118] = ['A1'];
 comments[118] = "Id Pregunta: 40. Constituci&oacute;n de 1978";
 preguntaids[118] = 40


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[119]= "120)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:<br/>";
 choices[119]= new Array();
 choices[119][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a.";
 choices[119][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[119][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a en tanto no hayan pasado a formar parte del ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[119][3] = "ratificados por Espa&ntilde;a y publicadas en el BOE, no son fuente de derecho.";
 answers[119] = 2;
 units[119] = ['1'];
 blocks[119] = ['A1'];
 comments[119] = "Id Pregunta: 54. Constituci&oacute;n de 1978";
 preguntaids[119] = 54


//  Id pregunta: 117 Año de creación de pregunta: 2019
 questions[120]= "121)  Se&ntilde;ale la respuesta INCORRECTA en relaci&oacute;n con el art&iacute;culo 18 de la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[120]= new Array();
 choices[120][0] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen.";
 choices[120][1] = "El domicilio es inviolable. Ninguna entrada o registro podr&aacute; hacerse en &eacute;l sin consentimiento del titular o resoluci&oacute;n judicial o administrativa.";
 choices[120][2] = "Se garantiza el secreto de las comunicaciones y, en especial, de las postales, telegr&aacute;ficas y telef&oacute;nicas, salvo resoluci&oacute;n judicial.";
 choices[120][3] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[120] = 1;
 units[120] = ['1'];
 blocks[120] = ['A1'];
 comments[120] = "Id Pregunta: 117. Examen TIC A1 AGE 2017";
 preguntaids[120] = 117


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[121]= "122)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?<br/>";
 choices[121]= new Array();
 choices[121][0] = "La Comisi&oacute;n Permanente.";
 choices[121][1] = "El Presidente.";
 choices[121][2] = "El Pleno.";
 choices[121][3] = "El Vicepresidente.";
 answers[121] = 1;
 units[121] = ['1'];
 blocks[121] = ['A1'];
 comments[121] = "Id Pregunta: 20. Constituci&oacute;n de 1978";
 preguntaids[121] = 20


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[122]= "123)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:<br/>";
 choices[122]= new Array();
 choices[122][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[122][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[122][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[122][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[122] = 0;
 units[122] = ['1'];
 blocks[122] = ['A1'];
 comments[122] = "Id Pregunta: 111. Examen GSI A2 AGE 2008";
 preguntaids[122] = 111


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[123]= "124)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:<br/>";
 choices[123]= new Array();
 choices[123][0] = "De la C&aacute;mara respectiva.";
 choices[123][1] = "Del Rey.";
 choices[123][2] = "Del Tribunal Constitucional.";
 choices[123][3] = "Del Tribunal Supremo.";
 answers[123] = 0;
 units[123] = ['1'];
 blocks[123] = ['A1'];
 comments[123] = "Id Pregunta: 104. Constituci&oacute;n de 1978";
 preguntaids[123] = 104


//  Id pregunta: 101 Año de creación de pregunta: 2019
 questions[124]= "125)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, corresponde al Rey:<br/>";
 choices[124]= new Array();
 choices[124][0] = "Controlar la acci&oacute;n del Gobierno.";
 choices[124][1] = "Convocar y disolver las Cortes Generales y convocar elecciones.";
 choices[124][2] = "Fiscalizar las cuentas y gesti&oacute;n econ&oacute;mica del Estado.";
 choices[124][3] = "Proponer los miembros del Gobierno.";
 answers[124] = 1;
 units[124] = ['1'];
 blocks[124] = ['A1'];
 comments[124] = "Id Pregunta: 101. Examen TIC A1 AGE 2017";
 preguntaids[124] = 101


//  Id pregunta: 135 Año de creación de pregunta: 2020
 questions[125]= "126)  Seg&uacute;n el art&iacute;culo 9 de la Constituci&oacute;n Espa&ntilde;ola, est&aacute;n sujetos a la Constituci&oacute;n y al resto del ordenamiento jur&iacute;dico:<br/>";
 choices[125]= new Array();
 choices[125][0] = "los ciudadanos y los poderes p&uacute;blicos.";
 choices[125][1] = "los ciudadanos a excepci&oacute;n de los poderes p&uacute;blicos.";
 choices[125][2] = "los ciudadanos y los poderes p&uacute;blicos, a excepci&oacute;n de las personas miembros del congreso y senado que gozan de inmunidad parlamentaria.";
 choices[125][3] = "los ciudadanos y los poderes p&uacute;blicos, a excepci&oacute;n de la persona que ostente la presidencia del Gobierno del Estado y de las comunidades aut&oacute;noma que no est&aacute;n sujetas a responsabilidad jur&iacute;dica.";
 answers[125] = 0;
 units[125] = ['1'];
 blocks[125] = ['A1'];
 comments[125] = "Id Pregunta: 135. Examen TFSTI A1 Gobierno de Canarias 2018";
 preguntaids[125] = 135


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[126]= "127)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:<br/>";
 choices[126]= new Array();
 choices[126][0] = "Un diputado y un senador, cada una de ellas.";
 choices[126][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[126][2] = "Un diputado y dos senadores, cada una de ellas.";
 choices[126][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[126] = 2;
 units[126] = ['1'];
 blocks[126] = ['A1'];
 comments[126] = "Id Pregunta: 109. Constituci&oacute;n de 1978";
 preguntaids[126] = 109


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[127]= "128)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?<br/>";
 choices[127]= new Array();
 choices[127][0] = "11";
 choices[127][1] = "12";
 choices[127][2] = "14";
 choices[127][3] = "8";
 answers[127] = 1;
 units[127] = ['1'];
 blocks[127] = ['A1'];
 comments[127] = "Id Pregunta: 10. Constituci&oacute;n de 1978";
 preguntaids[127] = 10


//  Id pregunta: 122 Año de creación de pregunta: 2020
 questions[128]= "129)  El art&iacute;culo 31 de la Constituci&oacute;n Espa&ntilde;ola de 1978 regula el principio de capacidad econ&oacute;mica y no confiscatoriedad y establece:<br/>";
 choices[128]= new Array();
 choices[128][0] = "Un sistema tributario justo y el car&aacute;cter progresivo de todos los impuestos sin que, en ning&uacute;n caso, tenga alcance confiscatorio.";
 choices[128][1] = "Un sistema tributario justo inspirado en los principios de igualdad y progresividad que, en ning&uacute;n caso, tendr&aacute; alcance confiscatorio.";
 choices[128][2] = "Un sistema tributario justo inspirado en los principios de igualdad y proporcionalidad que, en ning&uacute;n caso, tenga alcance confiscatorio.";
 choices[128][3] = "Un sistema tributario justo inspirado en los principios de igualdad y regresividad que, en ning&uacute;n caso, tenga alcance confiscatorio.";
 answers[128] = 1;
 units[128] = ['1'];
 blocks[128] = ['A1'];
 comments[128] = "Id Pregunta: 122. Examen TIC A1 AGE 2018";
 preguntaids[128] = 122


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[129]= "130)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:<br/>";
 choices[129]= new Array();
 choices[129][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[129][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[129][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[129][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[129] = 0;
 units[129] = ['1'];
 blocks[129] = ['A1'];
 comments[129] = "Id Pregunta: 110. Constituci&oacute;n de 1978";
 preguntaids[129] = 110


