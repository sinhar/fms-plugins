var HashMap = Java.type('java.util.HashMap');
var outputProperties = new HashMap();
print("This is from the pre-demo plugin.");
var finalMessage = "Pre-Demo:: " + "Message1: " + messagePart1 + " | " + "Message2: " + messagePart2 + " | " + "Message3: " + messagePart3;
outputProperties.put("finalMessage", finalMessage);